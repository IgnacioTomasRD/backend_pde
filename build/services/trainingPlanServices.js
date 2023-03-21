"use strict";
// days: "2"
// difficulty: "FACIL"
// duration: "2"
// muscles: {name: 'Pierna', subMuscles: Array(0)}{name: 'Abdomen', subMuscles: Array(0)}{name: 'Espalda', subMuscles: Array(0)}
// typeOfTraining: "FUERZA"
Object.defineProperty(exports, "__esModule", { value: true });
const globalVariables_1 = require("../globalVariables");
const personalizedExercise_1 = require("../models/personalizedExercise");
const training_1 = require("../models/training");
const typeOfTraining_1 = require("../models/typeOfTraining");
const ConverterBody_1 = require("../utils/ConverterBody");
const weight_1 = require("../models/weight");
function generateTrainingPlan(body) {
    let muscles = body.muscles;
    let typeOfTraining = ConverterBody_1.ConverterBody.toTypeOfTraining(body);
    let days = parseInt(body.days);
    let duration = parseInt(body.duration);
    let typeOfDifficulty = ConverterBody_1.ConverterBody.toTypeOfDifficulty(body);
    let weight;
    if (typeOfTraining === typeOfTraining_1.TypeOfTraining.FUERZA) {
        weight = weight_1.Weight.PESADO;
    }
    else {
        weight = ConverterBody_1.ConverterBody.toWeight(body);
    }
    let difficulty = getDifficulty(typeOfDifficulty, weight);
    let object = {
        muscles,
        typeOfDifficulty,
        typeOfTraining,
        days,
        duration,
        weight,
        difficulty
    };
    console.log(object);
    let numberOfWorkouts = duration * 4 * days; // 4 weeks per month
    let exercises = getExercisesAccordingToTypeOfTraining(typeOfTraining);
    let exercisesMatrix = getMatrixAccordingToMuscles(muscles, exercises);
    console.log("-------------------------------------------");
    let trainings = [];
    for (let i = 0; i < numberOfWorkouts; i++) {
        let aux = i % muscles.length;
        trainings.push(new training_1.Training(i, "Entrenamiento " + (i + 1), exercisesMatrix[aux].map(ex => new personalizedExercise_1.PersonalizatedExercise(ex, difficulty ? difficulty.getSeries() : 0, difficulty ? difficulty.getReps() : 0)), [muscles[aux]]));
    }
    console.log(trainings);
    return (Object.assign(Object.assign({}, object), { trainings }));
}
function getDifficulty(typeOfDifficulty, weight) {
    return globalVariables_1.difficultyList.find(dif => dif.getTypeOfDifficulty() === typeOfDifficulty && dif.getWeight() === weight);
}
function getExercisesAccordingToTypeOfTraining(typeOfTraining) {
    return typeOfTraining ? globalVariables_1.exerciseList.filter(ex => ex.getTypesOfTraining().includes(typeOfTraining)) : undefined;
}
function getMatrixAccordingToMuscles(muscles, exercises) {
    let exerciseAuxMatrix = [];
    if (exercises) {
        for (let i = 0; i < muscles.length; i++) {
            let exercisesAux = (exercises.filter(ex => ex.getMusclesInvolved().map(m => m.getName()).includes((muscles[i].name))));
            exerciseAuxMatrix.push(selectExercisesRandom(exercisesAux));
        }
        return exerciseAuxMatrix;
    }
    return [];
}
function selectExercisesRandom(exercises) {
    if (exercises.length < 5) {
        return exercises;
    }
    else {
        let exercisesAux = [];
        let numbersSelected = [];
        for (let i = 0; i < 5; i++) {
            let index = selectNumberDistinct(numbersSelected, exercises.length);
            exercisesAux.push(exercises[index ? index : 0]);
        }
        return exercisesAux;
    }
}
function selectNumberDistinct(numbersSelected, max) {
    let numbAux = Math.ceil(Math.random() * max - 1);
    if (numbersSelected.includes(numbAux)) {
        selectNumberDistinct(numbersSelected, max);
    }
    else {
        return numbAux;
    }
}
exports.default = generateTrainingPlan;

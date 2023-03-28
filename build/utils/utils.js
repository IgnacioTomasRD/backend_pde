"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectExercises = exports.divideNumberIntoParts = exports.getMatrixAccordingToMuscles = exports.getExercisesAccordingToTypeOfTraining = void 0;
const exercise_repository_1 = require("../repositories/exercise.repository");
function getExercisesAccordingToTypeOfTraining(typeOfTraining) {
    return typeOfTraining ? exercise_repository_1.exerciseRepository.getAll().filter(ex => ex.getTypesOfTraining().includes(typeOfTraining)) : undefined;
}
exports.getExercisesAccordingToTypeOfTraining = getExercisesAccordingToTypeOfTraining;
function getMatrixAccordingToMuscles(muscles, exercises) {
    let exerciseAuxMatrix = [];
    if (exercises) {
        for (let i = 0; i < muscles.length; i++) {
            let exercisesAux = (exercises.filter(ex => ex.getMusclesInvolved().map(m => m.getName()).includes((muscles[i].name))));
            exerciseAuxMatrix.push(selectRandomExercises(exercisesAux));
        }
        return exerciseAuxMatrix;
    }
    return [];
}
exports.getMatrixAccordingToMuscles = getMatrixAccordingToMuscles;
function selectRandomExercises(exercises) {
    // 5 ejercicios como minimo
    if (exercises.length < 5) {
        return exercises;
    }
    else {
        let exercisesAux = [];
        let numbersSelected = [];
        for (let i = 0; i < 5; i++) {
            let index = selectNumberDistinct(numbersSelected, exercises.length);
            numbersSelected.push(index ? index : 0);
            exercisesAux.push(exercises[index ? index : 0]);
        }
        return exercisesAux;
    }
}
function selectNumberDistinct(numbersSelected, max) {
    let numbAux = Math.ceil(Math.random() * max - 1);
    if (numbersSelected.includes(numbAux)) {
        return selectNumberDistinct(numbersSelected, max);
    }
    else {
        return numbAux;
    }
}
function divideNumberIntoParts(num, elements) {
    const initialValue = Math.floor(num / elements);
    const numberOfItemToFix = num % elements;
    const array = new Array(elements).fill(initialValue);
    for (let i = 0; i < numberOfItemToFix; i++) {
        array[i]++;
    }
    return array;
}
exports.divideNumberIntoParts = divideNumberIntoParts;
function selectExercises(exercisesMatrix) {
    let exercises = [];
    let exercisesPerMuscle = 3;
    for (let i = 0; i < exercisesMatrix.length; i++) {
        let exercisesAux = exercisesMatrix[i].slice(0, exercisesPerMuscle);
        exercisesAux.forEach(ex => exercises.push(ex));
    }
    return exercises;
}
exports.selectExercises = selectExercises;

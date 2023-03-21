"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterBody = void 0;
const TypeOfDifficulty_1 = require("../models/TypeOfDifficulty");
const exercise_1 = require("../models/exercise");
const muscle_1 = require("../models/muscle");
const personalizedExercise_1 = require("../models/personalizedExercise");
const subMuscle_1 = require("../models/subMuscle");
const training_1 = require("../models/training");
const typeOfTraining_1 = require("../models/typeOfTraining");
const exercise_repository_1 = require("../repositories/exercise.repository");
const DataValidator_1 = require("./DataValidator");
const weight_1 = require("../models/weight");
const NormalPlanner_1 = require("../services/NormalPlanner");
const PlusPlanner_1 = require("../services/PlusPlanner");
const globalVariables_1 = require("../globalVariables");
const utils_1 = require("./utils");
class ConverterBody {
    static toExistingMuscle(muscle) {
        return globalVariables_1.muscleList.find(m => m.getName() === muscle.name);
    }
}
exports.ConverterBody = ConverterBody;
ConverterBody.toMuscle = function (body) {
    if (!DataValidator_1.DataValidatorBody.isValidMuscle(body)) {
        throw new Error("musculo no valido");
    }
    else {
        return new muscle_1.Muscle(body.name, body.subMuscles.length !== 0 ? body.subMuscles.map((s) => ConverterBody.toSubMuscle(s)) : [], body.img);
    }
};
ConverterBody.toSubMuscle = function (body) {
    return new subMuscle_1.SubMuscle(body.name);
};
ConverterBody.toExercise = function (body) {
    if (!DataValidator_1.DataValidatorBody.isValidExercise(body)) {
        throw new Error("ejericio no valido");
    }
    else {
        return new exercise_1.Exercise(body.name, body.description, body.difficulty, body.musclesInvolved.map((m) => ConverterBody.toMuscle(m)), "");
    }
};
ConverterBody.toTraining = function (body) {
    if (DataValidator_1.DataValidatorBody.isValidTraining(body)) {
        return new training_1.Training(body.id, body.name, body.exercises.map((ex) => ConverterBody.toPersonalizedExercise(ex)), []);
    }
    else {
        throw new Error("entrenamiento no valido");
    }
};
ConverterBody.toPersonalizedExercise = function (body) {
    return new personalizedExercise_1.PersonalizatedExercise(exercise_repository_1.exerciseRepository.findByName(body.exercise.name), body.series, body.reps);
};
ConverterBody.toTypeOfDifficulty = function (body) {
    let typeOfDifficulty = TypeOfDifficulty_1.TypeOfDifficulty.FACIL; // default
    if (DataValidator_1.DataValidatorBody.isValidTypeOfDifficulty(body)) {
        if (body.typeOfDifficulty === 'FACIL')
            typeOfDifficulty = TypeOfDifficulty_1.TypeOfDifficulty.FACIL;
        else if (body.typeOfDifficulty === 'INTERMEDIO')
            typeOfDifficulty = TypeOfDifficulty_1.TypeOfDifficulty.INTERMEDIO;
        else if (body.typeOfDifficulty === 'DIFICIL')
            typeOfDifficulty = TypeOfDifficulty_1.TypeOfDifficulty.DIFICIL;
    }
    else {
        throw new Error("tipo de dificultad no valida");
    }
    return typeOfDifficulty;
};
ConverterBody.toTypeOfTraining = function (body) {
    let typeOfTraining = typeOfTraining_1.TypeOfTraining.HIPERTROFIA; // default
    if (DataValidator_1.DataValidatorBody.isValidTypeOfTraining(body)) {
        if (body.typeOfTraining === 'CARDIOVASCULAR')
            typeOfTraining = typeOfTraining_1.TypeOfTraining.CARDIOVASCULAR;
        else if (body.typeOfTraining === 'FUERZA')
            typeOfTraining = typeOfTraining_1.TypeOfTraining.FUERZA;
        else if (body.typeOfTraining === 'HIPERTROFIA')
            typeOfTraining = typeOfTraining_1.TypeOfTraining.HIPERTROFIA;
    }
    else {
        throw new Error("tipo de entrenamiento no valido");
    }
    return typeOfTraining;
};
ConverterBody.toWeight = function (body) {
    let weight = weight_1.Weight.LIVIANO;
    if (DataValidator_1.DataValidatorBody.isValidWeight(body)) {
        if (body.weight === 'LIVIANO')
            weight = weight_1.Weight.LIVIANO;
        else if (body.weight === 'INTERMEDIO')
            weight = weight_1.Weight.INTERMEDIO;
        else if (body.weight === 'PESADO')
            weight = weight_1.Weight.PESADO;
    }
    else {
        throw new Error("peso no valido");
    }
    return weight;
};
ConverterBody.toPlanner = function (body) {
    let planner = new NormalPlanner_1.NormalPlaner();
    if (DataValidator_1.DataValidatorBody.isValidTypeOfPlanner(body)) {
        if (body.typeOfPlanner === "normalPlanner") {
            planner = new NormalPlanner_1.NormalPlaner();
        }
        else {
            planner = new PlusPlanner_1.PlusPlanner();
        }
    }
    else {
        throw new Error("planificador no valido");
    }
    return planner;
};
ConverterBody.toTrainingPlanInfo = function (data) {
    let muscles = data.muscles.map((m) => ConverterBody.toExistingMuscle(m));
    let typeOfTraining = ConverterBody.toTypeOfTraining(data);
    let days = parseInt(data.days);
    let duration = parseInt(data.duration);
    let typeOfDifficulty = ConverterBody.toTypeOfDifficulty(data);
    let typeOfPlanner = ConverterBody.toPlanner(data);
    let weight;
    if (typeOfTraining === typeOfTraining_1.TypeOfTraining.FUERZA) {
        weight = weight_1.Weight.PESADO;
    }
    else {
        weight = ConverterBody.toWeight(data);
    }
    let difficulty = (0, utils_1.getDifficulty)(typeOfDifficulty, weight);
    let trainingPlanInfo = {
        muscles,
        typeOfTraining,
        days,
        duration,
        typeOfPlanner,
        difficulty
    };
    return trainingPlanInfo;
};

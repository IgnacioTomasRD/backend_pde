"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataValidatorBody = void 0;
const TypeOfDifficulty_1 = require("../models/TypeOfDifficulty");
const typeOfTraining_1 = require("../models/typeOfTraining");
const exercise_repository_1 = require("../repositories/exercise.repository");
const weight_1 = require("../models/weight");
class DataValidatorBody {
    static isValidTypeOfDifficulty(body) {
        return Object.values(TypeOfDifficulty_1.TypeOfDifficulty).includes(body.typeOfDifficulty);
    }
}
exports.DataValidatorBody = DataValidatorBody;
DataValidatorBody.isValidMuscle = function (body) {
    return typeof body.name === "string" && "subMuscles" in body && body.subMuscles.every((m) => typeof m.name === "string");
};
DataValidatorBody.isValidSubMuscle = function (body) {
    return typeof body.name === "string";
};
DataValidatorBody.isValidWeight = function (body) {
    return Object.values(weight_1.Weight).includes(body.weight);
};
DataValidatorBody.isValidExercise = function (body) {
    return typeof body.name === "string" && typeof body.description === "string" && typeof body.difficulty === "string" && DataValidatorBody.isValidTypeOfDifficulty(body.difficulty) && body.musclesInvolved.every((m) => DataValidatorBody.isValidMuscle(m));
};
DataValidatorBody.isValidTraining = function (body) {
    return typeof body.name === "string" && typeof body.day === "number" && DataValidatorBody.isValidTypeOfDifficulty(body.difficulty) && body.exercises.every((ex) => DataValidatorBody.isValidPersonalizedExercise(ex));
};
DataValidatorBody.isValidPersonalizedExercise = function (body) {
    return typeof body.series === "number" && typeof body.reps === "string" && exercise_repository_1.exerciseRepository.existExercise(body.exercise);
};
DataValidatorBody.isValidTypeOfTraining = function (body) {
    return Object.values(typeOfTraining_1.TypeOfTraining).includes(body.typeOfTraining);
};
DataValidatorBody.isValidTypeOfPlanner = function (body) {
    return body.typeOfPlanner === "normalPlanner" || body.typeOfPlanner === "plusPlanner";
};

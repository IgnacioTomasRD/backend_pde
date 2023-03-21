"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trainingList = exports.exerciseList = exports.muscleList = exports.difficultyList = exports.trainingPlanList = void 0;
const TypeOfDifficulty_1 = require("./models/TypeOfDifficulty");
const exercise_1 = require("./models/exercise");
const muscle_1 = require("./models/muscle");
const difficulty_1 = require("./models/difficulty");
const weight_1 = require("./models/weight");
const typeOfTraining_1 = require("./models/typeOfTraining");
exports.trainingPlanList = [];
exports.difficultyList = [
    new difficulty_1.Difficulty(25, 4, TypeOfDifficulty_1.TypeOfDifficulty.FACIL, weight_1.Weight.LIVIANO),
    new difficulty_1.Difficulty(20, 4, TypeOfDifficulty_1.TypeOfDifficulty.FACIL, weight_1.Weight.INTERMEDIO),
    new difficulty_1.Difficulty(15, 3, TypeOfDifficulty_1.TypeOfDifficulty.FACIL, weight_1.Weight.PESADO),
    new difficulty_1.Difficulty(35, 4, TypeOfDifficulty_1.TypeOfDifficulty.INTERMEDIO, weight_1.Weight.LIVIANO),
    new difficulty_1.Difficulty(25, 4, TypeOfDifficulty_1.TypeOfDifficulty.INTERMEDIO, weight_1.Weight.INTERMEDIO),
    new difficulty_1.Difficulty(15, 4, TypeOfDifficulty_1.TypeOfDifficulty.INTERMEDIO, weight_1.Weight.PESADO),
    new difficulty_1.Difficulty(50, 4, TypeOfDifficulty_1.TypeOfDifficulty.DIFICIL, weight_1.Weight.LIVIANO),
    new difficulty_1.Difficulty(12, 4, TypeOfDifficulty_1.TypeOfDifficulty.DIFICIL, weight_1.Weight.INTERMEDIO),
    new difficulty_1.Difficulty(8, 4, TypeOfDifficulty_1.TypeOfDifficulty.DIFICIL, weight_1.Weight.PESADO)
];
exports.muscleList = [
    new muscle_1.Muscle("Pecho", [], "foto_pecho.png"),
    new muscle_1.Muscle("Hombros", [], "foto_hombro.jpg"),
    new muscle_1.Muscle("Pierna", [], "foto_pierna.jpg"),
    new muscle_1.Muscle("Brazos", [], "foto_biceps.png"),
    new muscle_1.Muscle("Abdomen", [], "foto_abs.jpg"),
    new muscle_1.Muscle("Espalda", [], "foto_espalda.jpg") //5
];
exports.exerciseList = [
    new exercise_1.Exercise("Press Banca", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA, typeOfTraining_1.TypeOfTraining.FUERZA], "", [exports.muscleList[0]], "3k1WyyqWk-s"),
    new exercise_1.Exercise("Press Inclinado", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA, typeOfTraining_1.TypeOfTraining.FUERZA], "", [exports.muscleList[0]], "bUwTJh4PIMk"),
    new exercise_1.Exercise("Cruces en polea", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA], "", [exports.muscleList[0]], "XnaMi2Gb_9Q"),
    new exercise_1.Exercise("Fondos", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA], "", [exports.muscleList[0]], "NF_wvA7CHGQ"),
    new exercise_1.Exercise("Flexiones", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA], "", [exports.muscleList[0]], "e_EKkqoHxns"),
    new exercise_1.Exercise("Flexiones diamante", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA], "", [exports.muscleList[0]], "ITe43DiSvrE"),
    new exercise_1.Exercise("Press inclinado con mancuerna", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA], "", [exports.muscleList[0]], "MkMf308jXww"),
    new exercise_1.Exercise("Sentadilla", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA, typeOfTraining_1.TypeOfTraining.FUERZA, typeOfTraining_1.TypeOfTraining.CARDIOVASCULAR], "", [exports.muscleList[2]], "qe-vI_JBtjM"),
    new exercise_1.Exercise("Prensa", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA, typeOfTraining_1.TypeOfTraining.FUERZA], "", [exports.muscleList[2]], "D1FvjYNX9QI"),
    new exercise_1.Exercise("Estocadas", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA, typeOfTraining_1.TypeOfTraining.CARDIOVASCULAR], "", [exports.muscleList[2]], "Xcfs_3DMKlc"),
    new exercise_1.Exercise("Press Militar", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA, typeOfTraining_1.TypeOfTraining.FUERZA], "", [exports.muscleList[1]], "j_Buh54Sb-w"),
    new exercise_1.Exercise("Vuelos laterales", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA], "", [exports.muscleList[1]], "yUJN62SBW08"),
    new exercise_1.Exercise("Press Arnold", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA], "", [exports.muscleList[1]], "l5tNUbpusCA"),
    new exercise_1.Exercise("Dominadas", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA, typeOfTraining_1.TypeOfTraining.FUERZA], "", [exports.muscleList[5]], "RjZOKbg-Viw"),
    new exercise_1.Exercise("Remo en polea", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA, typeOfTraining_1.TypeOfTraining.FUERZA], "", [exports.muscleList[5]], "81dy09ap9tg"),
    new exercise_1.Exercise("Remo con barra", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA, typeOfTraining_1.TypeOfTraining.FUERZA], "", [exports.muscleList[5]], "nQSi7XLixYU"),
    new exercise_1.Exercise("Rueda", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA], "", [exports.muscleList[4]], "0JzHapbZnfQ"),
    new exercise_1.Exercise("Cortos", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA, typeOfTraining_1.TypeOfTraining.CARDIOVASCULAR], "", [exports.muscleList[4]], "Wjq0aNDJMiM"),
    new exercise_1.Exercise("Dragon flag", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA, typeOfTraining_1.TypeOfTraining.FUERZA], "", [exports.muscleList[4]], "8d0sQcw9xik"),
    new exercise_1.Exercise("Curl de Biceps", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA, typeOfTraining_1.TypeOfTraining.FUERZA], "", [exports.muscleList[3]], "MvELKGVXF40"),
    new exercise_1.Exercise("Triceps en polea", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA, typeOfTraining_1.TypeOfTraining.FUERZA], "", [exports.muscleList[3]], "fx4X-IBYxVI"),
    new exercise_1.Exercise("Curl de Biceps con barra", [typeOfTraining_1.TypeOfTraining.HIPERTROFIA, typeOfTraining_1.TypeOfTraining.FUERZA], "", [exports.muscleList[3]], "STq4k6wWrTY"),
];
exports.trainingList = [];

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalPlaner = void 0;
const personalizedExercise_1 = require("../models/personalizedExercise");
const training_1 = require("../models/training");
class NormalPlaner {
    createTraining(numberOfWorkouts, days, muscles, exercisesMatrix, difficulty) {
        let trainings = [];
        for (let i = 0; i < numberOfWorkouts; i++) {
            let aux = i % muscles.length;
            trainings.push(new training_1.Training(i, "Entrenamiento " + (i + 1), exercisesMatrix[aux].map(ex => new personalizedExercise_1.PersonalizatedExercise(ex, difficulty ? difficulty.getSeries() : 0, difficulty ? difficulty.getReps() : 0)), [muscles[aux]]));
        }
        return trainings;
    }
}
exports.NormalPlaner = NormalPlaner;

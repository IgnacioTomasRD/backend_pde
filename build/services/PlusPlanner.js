"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlusPlanner = void 0;
const personalizedExercise_1 = require("../models/personalizedExercise");
const training_1 = require("../models/training");
const utils_1 = require("../utils/utils");
class PlusPlanner {
    createTraining(numberOfWorkouts, days, muscles, exercisesMatrix, difficulty) {
        let trainings = [];
        let musclesPerDay = (0, utils_1.divideNumberIntoParts)(muscles.length, days);
        let beforeIndexAcum = 0;
        for (let i = 0; i < numberOfWorkouts; i++) {
            let day = i % days;
            let index = musclesPerDay[day];
            let from = beforeIndexAcum;
            let until = beforeIndexAcum + index;
            let exMatrix = exercisesMatrix.slice(from, until);
            let exercises = (0, utils_1.selectExercises)(exMatrix);
            trainings.push(new training_1.Training(i, "Entrenamiento " + (i + 1), exercises.map(ex => new personalizedExercise_1.PersonalizatedExercise(ex, difficulty ? difficulty.getSeries() : 0, difficulty ? difficulty.getReps() : 0)), muscles.slice(from, until)));
            if (day === musclesPerDay.length - 1) {
                beforeIndexAcum = 0;
            }
            else {
                beforeIndexAcum = until;
            }
        }
        return trainings;
    }
}
exports.PlusPlanner = PlusPlanner;

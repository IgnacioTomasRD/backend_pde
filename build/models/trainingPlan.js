"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingPlan = void 0;
class TrainingPlan {
    constructor(trainingList, difficulty, duration, typeOfTraining) {
        this.difficulty = difficulty;
        this.trainings = trainingList;
        this.duration = duration;
        this.typeOfTraining = typeOfTraining;
    }
}
exports.TrainingPlan = TrainingPlan;

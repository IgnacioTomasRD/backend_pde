"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingGenerator = void 0;
const trainingPlan_1 = require("../models/trainingPlan");
const utils_1 = require("../utils/utils");
const NormalPlanner_1 = require("./NormalPlanner");
class TrainingGenerator {
    constructor() {
    }
    setPlanningStrategy(trainingPlanningStrategy) {
        this.trainingPlanningStrategy = trainingPlanningStrategy;
    }
    createPlan(trainingPlanInfo) {
        try {
            console.log(trainingPlanInfo);
            let { muscles, typeOfTraining, days, duration, typeOfPlanner, difficulty } = trainingPlanInfo;
            if (days > muscles.length) {
                this.setPlanningStrategy(new NormalPlanner_1.NormalPlaner());
            }
            else {
                this.setPlanningStrategy(typeOfPlanner);
            }
            let weeksPerMonth = 4;
            let numberOfWorkouts = duration * weeksPerMonth * days;
            let exercises = (0, utils_1.getExercisesAccordingToTypeOfTraining)(typeOfTraining);
            let exercisesMatrix = (0, utils_1.getMatrixAccordingToMuscles)(muscles, exercises);
            let trainings = this.trainingPlanningStrategy.createTraining(numberOfWorkouts, days, muscles, exercisesMatrix, difficulty);
            let trainingPlan = new trainingPlan_1.TrainingPlan(trainings, difficulty, duration, typeOfTraining);
            return trainingPlan;
        }
        catch (e) {
            console.error(e);
            throw new Error("no se ha podido generar el plan");
        }
    }
}
exports.TrainingGenerator = TrainingGenerator;

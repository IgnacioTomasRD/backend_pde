"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingPlanGenerator = void 0;
const typeOfTraining_1 = require("../models/typeOfTraining");
const weight_1 = require("../models/weight");
const ConverterBody_1 = require("../utils/ConverterBody");
const utils_1 = require("../utils/utils");
const NormalPlanner_1 = require("./NormalPlanner");
class TrainingPlanGenerator {
    constructor() {
    }
    setPlanningStrategy(trainingPlanningStrategy) {
        this.trainingPlanningStrategy = trainingPlanningStrategy;
    }
    createPlan(data) {
        let muscles = data.muscles;
        let typeOfTraining = ConverterBody_1.ConverterBody.toTypeOfTraining(data);
        let days = parseInt(data.days);
        let duration = parseInt(data.duration);
        let typeOfDifficulty = ConverterBody_1.ConverterBody.toTypeOfDifficulty(data);
        let typeOfPlanner = ConverterBody_1.ConverterBody.toPlanner(data);
        //OJO CON ESTE IF QUE NO LO PROBE
        if (days > muscles.length) {
            this.setPlanningStrategy(new NormalPlanner_1.NormalPlaner());
        }
        else {
            this.setPlanningStrategy(typeOfPlanner);
        }
        let weight;
        if (typeOfTraining === typeOfTraining_1.TypeOfTraining.FUERZA) {
            weight = weight_1.Weight.PESADO;
        }
        else {
            weight = ConverterBody_1.ConverterBody.toWeight(data);
        }
        let difficulty = (0, utils_1.getDifficulty)(typeOfDifficulty, weight);
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
        let exercises = (0, utils_1.getExercisesAccordingToTypeOfTraining)(typeOfTraining);
        let exercisesMatrix = (0, utils_1.getMatrixAccordingToMuscles)(muscles, exercises);
        let trainings = this.trainingPlanningStrategy.createTraining(numberOfWorkouts, days, muscles, exercisesMatrix, difficulty);
        console.log(trainings);
        return (Object.assign(Object.assign({}, object), { trainings }));
    }
}
exports.TrainingPlanGenerator = TrainingPlanGenerator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trainingPlanController = void 0;
const trainingPlan_repository_1 = require("../repositories/trainingPlan.repository");
const TrainingGenerator_1 = require("../services/TrainingGenerator");
const ConverterBody_1 = require("../utils/ConverterBody");
exports.trainingPlanController = {
    getTrainingPlans: function (req, res) {
        res.send(trainingPlan_repository_1.trainingPlanRepository.getAll());
    },
    genTrainingPlan: function (req, res) {
        try {
            let trainingPlanInfo = ConverterBody_1.ConverterBody.toTrainingPlanInfo(req.body);
            let trainingGenerator = new TrainingGenerator_1.TrainingGenerator();
            let info = trainingGenerator.createPlan(trainingPlanInfo);
            res.send(info);
        }
        catch (error) {
            console.error(error);
            res.send(error.message);
        }
    }
};

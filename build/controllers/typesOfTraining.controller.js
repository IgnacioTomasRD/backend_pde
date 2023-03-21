"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOfTrainingController = void 0;
const typesOfTraining_repository_1 = require("../repositories/typesOfTraining.repository");
exports.typeOfTrainingController = {
    getTrainingPlans: function (req, res) {
        res.send(JSON.stringify(typesOfTraining_repository_1.typesOfTrainingRepository.getAll()));
    }
};

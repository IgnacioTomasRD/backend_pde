"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trainingController = void 0;
const training_repository_1 = require("../repositories/training.repository");
const ConverterBody_1 = require("../utils/ConverterBody");
exports.trainingController = {
    saveTraining(request, response) {
        try {
            training_repository_1.trainingRepository.save(ConverterBody_1.ConverterBody.toTraining(request.body));
            response.send(training_repository_1.trainingRepository.getAll());
        }
        catch (e) {
            response.send(e.message);
        }
    },
    getTrainings(request, response) {
        return training_repository_1.trainingRepository.getAll();
    }
};

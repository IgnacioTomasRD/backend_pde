"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exerciseController = void 0;
const exercise_repository_1 = require("../repositories/exercise.repository");
const ConverterBody_1 = require("../utils/ConverterBody");
exports.exerciseController = {
    getExercises: (req, res) => {
        res.send(exercise_repository_1.exerciseRepository.getAll());
    },
    saveExercise(req, res) {
        try {
            exercise_repository_1.exerciseRepository.save(ConverterBody_1.ConverterBody.toExercise(req.body));
            res.send(exercise_repository_1.exerciseRepository.getAll());
        }
        catch (error) {
            console.error(error);
            res.send(error.message);
        }
    }
};

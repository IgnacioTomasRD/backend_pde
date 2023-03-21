"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.muscleController = void 0;
const muscle_repository_1 = require("../repositories/muscle.repository");
const ConverterBody_1 = require("../utils/ConverterBody");
exports.muscleController = {
    getMuscles: (req, res) => {
        res.send(muscle_repository_1.muscleRepository.getAll());
    },
    saveMuscle(req, res) {
        try {
            muscle_repository_1.muscleRepository.save(ConverterBody_1.ConverterBody.toMuscle(req.body));
            res.send(muscle_repository_1.muscleRepository.getAll());
        }
        catch (e) {
            console.error(e);
            res.send(e.message);
        }
    }
};

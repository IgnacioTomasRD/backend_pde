"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerExercise = void 0;
const express_1 = __importDefault(require("express"));
const exercise_controller_1 = require("../controllers/exercise.controller");
const routerExercise = express_1.default.Router();
exports.routerExercise = routerExercise;
routerExercise.get("/exercise", (req, res) => exercise_controller_1.exerciseController.getExercises(req, res));
routerExercise.post("/exercise", (req, res) => exercise_controller_1.exerciseController.saveExercise(req, res));

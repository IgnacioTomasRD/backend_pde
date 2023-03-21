"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerMuscle = void 0;
const express_1 = __importDefault(require("express"));
const muscle_controller_1 = require("../controllers/muscle.controller");
const routerMuscle = express_1.default.Router();
exports.routerMuscle = routerMuscle;
routerMuscle.get("/muscle", (req, res) => muscle_controller_1.muscleController.getMuscles(req, res));
routerMuscle.post("/muscle", (req, res) => muscle_controller_1.muscleController.saveMuscle(req, res));

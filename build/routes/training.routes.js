"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerTraining = void 0;
const express_1 = __importDefault(require("express"));
const training_controller_1 = require("../controllers/training.controller");
const routerTraining = express_1.default.Router();
exports.routerTraining = routerTraining;
routerTraining.get("/training", (req, res) => training_controller_1.trainingController.getTrainings(req, res));
routerTraining.post("/training", (req, res) => training_controller_1.trainingController.saveTraining(req, res));

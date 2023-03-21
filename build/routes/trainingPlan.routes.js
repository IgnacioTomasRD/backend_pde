"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerTrainingPlan = void 0;
const express_1 = __importDefault(require("express"));
const trainingPlan_controller_1 = require("../controllers/trainingPlan.controller");
const routerTrainingPlan = express_1.default.Router();
exports.routerTrainingPlan = routerTrainingPlan;
routerTrainingPlan.get("/trainingPlan", (req, res) => trainingPlan_controller_1.trainingPlanController.getTrainingPlans(req, res));
routerTrainingPlan.post("/trainingPlan", (req, res) => trainingPlan_controller_1.trainingPlanController.genTrainingPlan(req, res));

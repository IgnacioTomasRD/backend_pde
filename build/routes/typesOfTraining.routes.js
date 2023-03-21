"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerTypesOfTraining = void 0;
const express_1 = __importDefault(require("express"));
const typesOfTraining_controller_1 = require("../controllers/typesOfTraining.controller");
const routerTypesOfTraining = express_1.default.Router();
exports.routerTypesOfTraining = routerTypesOfTraining;
routerTypesOfTraining.get("/typesOfTraining", (req, res) => typesOfTraining_controller_1.typeOfTrainingController.getTrainingPlans(req, res));

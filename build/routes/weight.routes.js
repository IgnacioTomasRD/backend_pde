"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerWeight = void 0;
const express_1 = __importDefault(require("express"));
const weight_controller_1 = require("../controllers/weight.controller");
const routerWeight = express_1.default.Router();
exports.routerWeight = routerWeight;
routerWeight.get("/weight", (req, res) => weight_controller_1.weightController.getWeights(req, res));

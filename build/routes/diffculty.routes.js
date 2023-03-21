"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerDifficulty = void 0;
const express_1 = __importDefault(require("express"));
const difficulty_controller_1 = require("../controllers/difficulty.controller");
const routerDifficulty = express_1.default.Router();
exports.routerDifficulty = routerDifficulty;
routerDifficulty.get("/difficulty", (req, res) => difficulty_controller_1.difficultyController.getAll(req, res));

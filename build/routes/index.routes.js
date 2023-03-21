"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerHome = void 0;
const express_1 = __importDefault(require("express"));
const routerHome = express_1.default.Router();
exports.routerHome = routerHome;
routerHome.get("", (req, res) => res.send("Bienvenido"));

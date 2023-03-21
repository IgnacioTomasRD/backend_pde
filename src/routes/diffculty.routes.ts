import express from "express";
import { difficultyController } from "../controllers/difficulty.controller";


const routerDifficulty = express.Router();

routerDifficulty.get("/difficulty",(req,res)=>difficultyController.getAll(req,res));

export {routerDifficulty }
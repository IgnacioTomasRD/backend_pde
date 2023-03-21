import express from "express";
import { exerciseController } from "../controllers/exercise.controller";

const routerExercise = express.Router();

routerExercise.get("/exercise",(req,res)=>exerciseController.getExercises(req,res));
routerExercise.post("/exercise",(req,res)=>exerciseController.saveExercise(req,res));

export {routerExercise}
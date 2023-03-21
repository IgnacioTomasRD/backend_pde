import express from "express";
import { muscleController } from "../controllers/muscle.controller";

const routerMuscle= express.Router();

routerMuscle.get("/muscle",(req,res)=>muscleController.getMuscles(req,res));
routerMuscle.post("/muscle",(req,res)=>muscleController.saveMuscle(req,res));

export {routerMuscle}
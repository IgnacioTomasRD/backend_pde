import express from "express";
import { trainingPlanController } from "../controllers/trainingPlan.controller";

const routerTrainingPlan = express.Router();

routerTrainingPlan.get("/trainingPlan",(req,res)=>trainingPlanController.getTrainingPlans(req,res));
routerTrainingPlan.post("/trainingPlan",(req,res)=>trainingPlanController.genTrainingPlan(req,res));

export {routerTrainingPlan}
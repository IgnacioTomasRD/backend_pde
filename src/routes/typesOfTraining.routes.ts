import express from "express";
import { typeOfTrainingController } from "../controllers/typesOfTraining.controller";

const routerTypesOfTraining = express.Router();

routerTypesOfTraining.get("/typesOfTraining",(req,res)=>typeOfTrainingController.getTrainingPlans(req,res));

export {routerTypesOfTraining}
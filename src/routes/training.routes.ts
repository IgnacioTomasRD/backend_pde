import express from "express";
import { trainingController } from "../controllers/training.controller";


const routerTraining = express.Router();

routerTraining.get("/training",(req,res)=>trainingController.getTrainings(req,res));
routerTraining.post("/training",(req,res)=>trainingController.saveTraining(req,res));

export {routerTraining}
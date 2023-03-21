import express from "express";
import { weightController } from "../controllers/weight.controller";

const routerWeight = express.Router();

routerWeight.get("/weight",(req,res)=>weightController.getWeights(req,res));

export {routerWeight}
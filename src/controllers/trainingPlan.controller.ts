
import { Request, Response } from "express";
import { TypeOfTraining } from "../models/typeOfTraining";
import { trainingPlanRepository } from "../repositories/trainingPlan.repository";
import { TrainingGenerator } from "../services/TrainingGenerator";
import generateTrainingPlan from "../services/trainingPlanServices";
import { ConverterBody } from "../utils/ConverterBody";


export const trainingPlanController = {
    
    getTrainingPlans: function (req: Request,res: Response): void{
        res.send(trainingPlanRepository.getAll());
    },

    genTrainingPlan: function(req: Request,res: Response): void{
        try{
            let trainingPlanInfo = ConverterBody.toTrainingPlanInfo(req.body);
            let trainingGenerator = new TrainingGenerator();
            let info = trainingGenerator.createPlan(trainingPlanInfo);

            res.send(info);
        } catch (error:any){
            console.error(error)
            res.send(error.message)
        }
    }
}


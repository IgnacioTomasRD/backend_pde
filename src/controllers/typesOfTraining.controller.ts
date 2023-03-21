import { Request, Response } from "express";
import { typesOfTrainingRepository } from "../repositories/typesOfTraining.repository";


export const typeOfTrainingController = {
    getTrainingPlans: function (req: Request,res: Response): void{
        res.send(JSON.stringify(typesOfTrainingRepository.getAll()));
    }
}

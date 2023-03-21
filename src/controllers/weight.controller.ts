import { Request, Response } from "express";
import { weightRepository } from "../repositories/weight.repository";


export const weightController = {
    getWeights: function (req: Request,res: Response): void{
        res.send(JSON.stringify(weightRepository.getAll()));
    }
}

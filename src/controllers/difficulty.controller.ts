import { Request, Response } from "express";
import { difficultyRepository } from "../repositories/difficulty.repository";


export const difficultyController = {
    getAll: function (req: Request,res: Response): void{
        res.send(JSON.stringify(difficultyRepository.getAll()));
    }
}

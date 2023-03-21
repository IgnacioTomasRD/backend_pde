import { exerciseRepository } from "../repositories/exercise.repository";
import { Request, Response } from "express";
import { ConverterBody } from "../utils/ConverterBody";

export const exerciseController = {
    getExercises:(req: Request,res: Response) => {
        res.send(exerciseRepository.getAll())
    },
    saveExercise(req: Request, res: Response){
        try{
            exerciseRepository.save(ConverterBody.toExercise(req.body));
            res.send(exerciseRepository.getAll());
        } catch(error: any){
            console.error(error);
            res.send(error.message);
        }
    }

}
import { Request, Response } from "express";
import { muscleRepository } from "../repositories/muscle.repository";
import { ConverterBody } from "../utils/ConverterBody";

export const muscleController={
    getMuscles:(req: Request,res: Response) => {
        res.send(muscleRepository.getAll())
    },
    saveMuscle(req: Request, res: Response){
        try{
            muscleRepository.save(ConverterBody.toMuscle(req.body));
            res.send(muscleRepository.getAll());
        } catch(e: any){
            console.error(e);
            res.send(e.message);
        }
    }
}

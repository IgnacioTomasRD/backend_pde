import { Request, Response } from "express";
import { trainingRepository } from "../repositories/training.repository";
import { ConverterBody } from "../utils/ConverterBody";

export const trainingController = {


    saveTraining(request: Request, response: Response){
        try{
            trainingRepository.save(ConverterBody.toTraining(request.body));
            response.send(trainingRepository.getAll());
        }catch(e:any){
            response.send(e.message);
        }
    },

    getTrainings(request: Request, response: Response){
        return trainingRepository.getAll();
    }


}
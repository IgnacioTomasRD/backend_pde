
import { TypeOfDifficulty} from "../models/TypeOfDifficulty";
import { TypeOfTraining } from "../models/typeOfTraining";
import { exerciseRepository } from "../repositories/exercise.repository";
import { Weight } from "../models/weight";

export class DataValidatorBody{
    static isValidMuscle =  function (body: any){
        return typeof body.name === "string" && "subMuscles" in body && body.subMuscles.every((m:any) => typeof m.name === "string");
    }

    static isValidSubMuscle= function (body:any){
        return typeof body.name === "string"
    }

    static isValidWeight= function (body:any){
        return Object.values(Weight).includes(body.weight);
    }

    static isValidExercise = function(body:any){
        return typeof body.name === "string" && typeof body.description === "string" && typeof body.difficulty === "string" && DataValidatorBody.isValidTypeOfDifficulty(body.difficulty) && body.musclesInvolved.every((m:any) => DataValidatorBody.isValidMuscle(m));
    }
    static isValidTraining = function(body:any){
        return typeof body.name === "string" && typeof body.day === "number" && DataValidatorBody.isValidTypeOfDifficulty(body.difficulty) && body.exercises.every((ex:any) => DataValidatorBody.isValidPersonalizedExercise(ex));
    }

    static isValidPersonalizedExercise = function(body:any){
        return typeof body.series === "number" && typeof body.reps === "string" && exerciseRepository.existExercise(body.exercise);
    }
    static isValidTypeOfDifficulty(body:any){
        return Object.values(TypeOfDifficulty).includes(body.typeOfDifficulty);
    }

    static isValidTypeOfTraining = function(body:any){
        return Object.values(TypeOfTraining).includes(body.typeOfTraining);
    }

    static isValidTypeOfPlanner = function(body:any){
        return body.typeOfPlanner === "normalPlanner" || body.typeOfPlanner === "plusPlanner"
    }


} 
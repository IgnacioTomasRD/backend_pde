import { TypeOfDifficulty } from "../models/TypeOfDifficulty";
import { Exercise } from "../models/exercise";
import {Muscle} from "../models/muscle"
import { PersonalizatedExercise } from "../models/personalizedExercise";
import { SubMuscle } from "../models/subMuscle";
import { Training } from "../models/training";
import { TypeOfTraining } from "../models/typeOfTraining";
import { exerciseRepository } from "../repositories/exercise.repository";
import { DataValidatorBody } from "./DataValidator";
import { Weight } from "../models/weight";
import { NormalPlaner } from "../services/NormalPlanner";
import { PlusPlanner } from "../services/PlusPlanner";
import { TrainingPlanningStrategy } from "../services/TrainingPlanningStrategy";
import { TrainingPlanInfo } from "../interfaces/TrainingPlanInfo";
import { difficultyRepository } from "../repositories/difficulty.repository";
import { muscleRepository } from "../repositories/muscle.repository";

export class ConverterBody{

    static toMuscle =function(body: any): Muscle {
      if(!DataValidatorBody.isValidMuscle(body)){
         throw new Error("musculo no valido");
      } else {
          return new Muscle(body.name,body.subMuscles.length !== 0 ? body.subMuscles.map((s: any) => ConverterBody.toSubMuscle(s)): [],body.img);
      }
    }
    
    static toExistingMuscle(muscle:any){
      return muscleRepository.getAll().find(m => m.getName() === muscle.name);
    }

    static toSubMuscle= function(body:any){
      return new SubMuscle(body.name);
    }

    static toExercise = function(body: any): Exercise{
      if(!DataValidatorBody.isValidExercise(body)){
         throw new Error("ejericio no valido");
      } else {
         return new Exercise(body.name,body.description,body.difficulty,body.musclesInvolved.map((m: any) => ConverterBody.toMuscle(m)),"");
      }
    }
    
    static toTraining = function(body:any): Training{
      if(DataValidatorBody.isValidTraining(body)){
         return new Training(body.id,body.name,body.exercises.map((ex:any) => ConverterBody.toPersonalizedExercise(ex)),[]);
      }
      else {
         throw new Error("entrenamiento no valido");
      }
    }

    static toPersonalizedExercise = function(body:any): PersonalizatedExercise{
         return new PersonalizatedExercise(exerciseRepository.findByName(body.exercise.name),body.series,body.reps);

    }


    static toTypeOfDifficulty = function (body: any){
      let typeOfDifficulty = TypeOfDifficulty.FACIL; // default
      if(DataValidatorBody.isValidTypeOfDifficulty(body)){
         if(body.typeOfDifficulty === 'FACIL')
            typeOfDifficulty = TypeOfDifficulty.FACIL;
         else if (body.typeOfDifficulty === 'INTERMEDIO')
            typeOfDifficulty = TypeOfDifficulty.INTERMEDIO;
         else if (body.typeOfDifficulty === 'DIFICIL')
            typeOfDifficulty = TypeOfDifficulty.DIFICIL;
      } else{
         throw new Error("tipo de dificultad no valida");
      }
      return typeOfDifficulty
    }


    static toTypeOfTraining = function (body: any): TypeOfTraining{
      let typeOfTraining =TypeOfTraining.HIPERTROFIA; // default
      if(DataValidatorBody.isValidTypeOfTraining(body)){
         if(body.typeOfTraining === 'CARDIOVASCULAR')
            typeOfTraining =  TypeOfTraining.CARDIOVASCULAR;
         else if (body.typeOfTraining === 'FUERZA')
            typeOfTraining = TypeOfTraining.FUERZA;
         else if (body.typeOfTraining === 'HIPERTROFIA')
            typeOfTraining = TypeOfTraining.HIPERTROFIA;
      } else {
         throw new Error("tipo de entrenamiento no valido");
      }
      return typeOfTraining;
    }

    static toWeight= function (body: any){
      let weight = Weight.LIVIANO;
      if(DataValidatorBody.isValidWeight(body)){
         if(body.weight === 'LIVIANO')
            weight = Weight.LIVIANO;
         else if (body.weight === 'INTERMEDIO')
            weight = Weight.INTERMEDIO;
         else if (body.weight === 'PESADO')
            weight = Weight.PESADO;
      } else {
         throw new Error("peso no valido");
      }
      return weight;
    }

    static toPlanner = function(body: any): TrainingPlanningStrategy{
      let planner = new NormalPlaner();
      if(DataValidatorBody.isValidTypeOfPlanner(body)){
         if(body.typeOfPlanner === "normalPlanner"){
            planner= new NormalPlaner();
         } else {
            planner= new PlusPlanner();
         }
      } else {
         throw new Error("planificador no valido");
      }
      return planner;
    }

    static toTrainingPlanInfo = function(data: any): TrainingPlanInfo{
    
      let muscles = data.muscles.map((m:any) =>ConverterBody.toExistingMuscle(m));
      let typeOfTraining: TypeOfTraining= ConverterBody.toTypeOfTraining(data);
      let days = parseInt(data.days);
      let duration = parseInt(data.duration);
      let typeOfDifficulty = ConverterBody.toTypeOfDifficulty(data);
      let typeOfPlanner = ConverterBody.toPlanner(data);
      let weight;

         
       if(typeOfTraining === TypeOfTraining.FUERZA){
          weight = Weight.PESADO
      } else{
          weight = ConverterBody.toWeight(data);
      }
         
      let difficulty = difficultyRepository.getDifficulty(typeOfDifficulty,weight);

      let trainingPlanInfo: TrainingPlanInfo ={
         muscles,
         typeOfTraining,
         days,
         duration,
         typeOfPlanner,
         difficulty
      }
        
      return trainingPlanInfo;
    }

}
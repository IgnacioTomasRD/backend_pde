import { TrainingPlanInfo } from "../interfaces/TrainingPlanInfo";
import { TrainingPlan } from "../models/trainingPlan";
import { getDifficulty, getExercisesAccordingToTypeOfTraining, getMatrixAccordingToMuscles } from "../utils/utils";
import { NormalPlaner } from "./NormalPlanner";
import { TrainingPlanningStrategy } from "./TrainingPlanningStrategy";


export class TrainingGenerator{
    private trainingPlanningStrategy!: TrainingPlanningStrategy;

    constructor(){
    }
    
    setPlanningStrategy(trainingPlanningStrategy: TrainingPlanningStrategy){
        this.trainingPlanningStrategy = trainingPlanningStrategy;
    }

    createPlan(trainingPlanInfo: TrainingPlanInfo): TrainingPlan{
        try{
            console.log(trainingPlanInfo);

            let {muscles,typeOfTraining,days,duration,typeOfPlanner,difficulty} = trainingPlanInfo;
            if(days> muscles.length){
                this.setPlanningStrategy(new NormalPlaner());
            }else {
                this.setPlanningStrategy(typeOfPlanner);
            }
            let weeksPerMonth = 4;
            let numberOfWorkouts = duration * weeksPerMonth * days; 
        
            let exercises = getExercisesAccordingToTypeOfTraining(typeOfTraining);
            let exercisesMatrix = getMatrixAccordingToMuscles(muscles,exercises);
            
            let trainings  = this.trainingPlanningStrategy.createTraining(numberOfWorkouts,days,muscles,exercisesMatrix,difficulty);

            let trainingPlan = new TrainingPlan(trainings,difficulty,duration,typeOfTraining);
            

            return trainingPlan;

        } catch(e){
            console.error(e);
            throw new Error("no se ha podido generar el plan");
        }
    }

}
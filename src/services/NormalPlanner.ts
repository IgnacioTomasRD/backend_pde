import { Difficulty } from "../models/difficulty";
import { Exercise } from "../models/exercise";
import { Muscle } from "../models/muscle";
import { PersonalizatedExercise } from "../models/personalizedExercise";
import { Training } from "../models/training";
import { TrainingPlanningStrategy } from "./TrainingPlanningStrategy";


export class NormalPlaner implements TrainingPlanningStrategy{
    createTraining(numberOfWorkouts: number,days:number, muscles: Muscle[], exercisesMatrix: Exercise[][], difficulty: Difficulty | undefined): Training[] {
        let trainings = [];
        for(let i = 0;i<numberOfWorkouts; i++){
            let aux = i % muscles.length;
            trainings.push(new Training(i,"Entrenamiento "+ (i+1),
                exercisesMatrix[aux].map(ex => new PersonalizatedExercise(ex,difficulty ? difficulty.getSeries(): 0 ,difficulty? difficulty.getReps() : 0)),[muscles[aux]]));
        }
        return trainings;
    }

}
    

import { Difficulty } from "../models/difficulty";
import { Exercise } from "../models/exercise";
import { Muscle } from "../models/muscle";
import { PersonalizatedExercise } from "../models/personalizedExercise";
import { Training } from "../models/training";
import { divideNumberIntoParts, selectExercises } from "../utils/utils";
import { TrainingPlanningStrategy } from "./TrainingPlanningStrategy";

export class PlusPlanner implements TrainingPlanningStrategy{
    createTraining(numberOfWorkouts: number,days:number, muscles: Muscle[], exercisesMatrix: Exercise[][], difficulty: Difficulty | undefined): Training[] {
        let trainings = [];
        let musclesPerDay = divideNumberIntoParts(muscles.length,days);

        let beforeIndexAcum = 0;
        
        for(let i = 0; i< numberOfWorkouts; i++){
            let day = i % days;
            let index = musclesPerDay[day];
            let from = beforeIndexAcum;
            let until = beforeIndexAcum + index;


            let exMatrix = exercisesMatrix.slice(from,until);

            
            let exercises = selectExercises(exMatrix);

            trainings.push(new Training(i,"Entrenamiento "+ (i+1),
                exercises.map(ex => new PersonalizatedExercise(ex,difficulty ? difficulty.getSeries(): 0 ,difficulty? difficulty.getReps() : 0)),muscles.slice(from,until)));
            
            if(day === musclesPerDay.length -1){
                beforeIndexAcum = 0;
            } else {
                beforeIndexAcum = until;
            }
        }

        return trainings;
    }
}



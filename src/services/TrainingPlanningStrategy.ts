import { Difficulty } from "../models/difficulty";
import { Exercise } from "../models/exercise";
import { Muscle } from "../models/muscle";
import { Training } from "../models/training";



export interface TrainingPlanningStrategy{
    createTraining(numberOfWorkouts: number,days:number,muscles: Muscle[],exercisesMatrix: Exercise[][],difficulty: Difficulty | undefined): Training[];
}
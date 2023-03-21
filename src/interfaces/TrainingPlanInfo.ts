import { Difficulty } from "../models/difficulty";
import { Muscle } from "../models/muscle";
import { TypeOfDifficulty } from "../models/TypeOfDifficulty";
import { TypeOfTraining } from "../models/typeOfTraining";
import { Weight } from "../models/weight";
import { TrainingPlanningStrategy } from "../services/TrainingPlanningStrategy";

export interface TrainingPlanInfo{
    muscles: Muscle[],
    typeOfTraining: TypeOfTraining,
    days: number,
    duration: number,
    typeOfPlanner: TrainingPlanningStrategy,
    difficulty: Difficulty
}
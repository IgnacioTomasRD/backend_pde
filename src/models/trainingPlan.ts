import { Training } from "./training";
import { TypeOfTraining } from "./typeOfTraining";
import { Difficulty } from "./difficulty";

export class TrainingPlan{
    private trainings:Training[];
    private difficulty: Difficulty;
    private duration: number;
    private typeOfTraining: TypeOfTraining;

    constructor(trainingList: Training[], difficulty: Difficulty,duration:number, typeOfTraining: TypeOfTraining){
        this.difficulty = difficulty;
        this.trainings=trainingList;
        this.duration = duration;
        this.typeOfTraining = typeOfTraining;
    }

}
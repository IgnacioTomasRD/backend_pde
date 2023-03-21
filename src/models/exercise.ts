import { Muscle } from "./muscle";
import { TypeOfTraining } from "./typeOfTraining";

export class Exercise{
    private name: string;
    private description: string;
    private musclesInvolved:Muscle[];
    private video: string;
    private typesOfTrainingPossible: TypeOfTraining[];
    
    constructor(name: string,typeOfTraining: TypeOfTraining[], description: string, musclesInvolved: Muscle[], video: string){
        this.name = name;
        this.description = description;
        this.musclesInvolved = musclesInvolved;
        this.video = video;
        this.typesOfTrainingPossible = typeOfTraining;
    }
    getMusclesInvolved() {
        return this.musclesInvolved;
    } 
    getName(){
        return this.name;
    }

    getTypesOfTraining(){
        return this.typesOfTrainingPossible;
    }

}
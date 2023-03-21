import { Weight } from "./weight";
import { TypeOfDifficulty } from "./TypeOfDifficulty";


export class Difficulty{
    private reps: number;
    private series: number;
    private typeOfDifficulty: TypeOfDifficulty;
    private weight: Weight;

    constructor(reps: number, series: number, typeOfDifficulty: TypeOfDifficulty, peso: Weight){
        this.reps = reps;
        this.series = series;
        this.typeOfDifficulty = typeOfDifficulty;
        this.weight = peso;
    }

    getReps(){
        return this.reps;
    }

    getSeries(){
        return this.series;
    }
    getTypeOfDifficulty(){
        return this.typeOfDifficulty;
    }

    getWeight(){
        return this.weight;
    }
}
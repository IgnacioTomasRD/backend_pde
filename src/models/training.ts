
import { Muscle } from "./muscle";
import { PersonalizatedExercise } from "./personalizedExercise";


export class Training{
    private id: number;
    private name: string;
    private exercises: PersonalizatedExercise[];
    private muscles: Muscle[];

    constructor(id:number, name:string, exercises: PersonalizatedExercise[],muscles: Muscle[]){
        this.id = id;
        this.name = name;
        this.exercises = exercises
        this.muscles = muscles;
    }

    getName(){
        return this.name;
    }
}
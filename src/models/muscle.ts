import { SubMuscle } from "./subMuscle";

export class Muscle{
    private name: string;
    private subMuscles: SubMuscle[];
    private img: string;

    constructor(name: string, subMuscles: SubMuscle[], img: string){
        this.name = name;
        this.subMuscles = subMuscles;
        this.img = img;
    }

    getName():string{
        return this.name;
    }
}
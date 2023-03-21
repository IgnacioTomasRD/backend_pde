import { muscleList } from "../globalVariables";
import { Muscle } from "../models/muscle";

export const muscleRepository={

    save: function save(muscle: Muscle): void{
        muscleList.push(muscle);
    },

    getAll: function get(): Muscle[]{
        return muscleList;
    },


}
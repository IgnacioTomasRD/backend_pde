import { trainingList } from "../globalVariables";
import { Training } from "../models/training";

export const trainingRepository={
    save: function save(training: Training): void{
        trainingList.push(training)
    },

    getAll: function getAll(): Training[]{
        return trainingList;
    },

    findByName: function(name: string | any): Training | undefined{
        return trainingList.find( tr => tr.getName() === name)
    }

}
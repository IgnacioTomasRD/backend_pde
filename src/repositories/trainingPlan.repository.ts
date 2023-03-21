import { trainingPlanList } from "../globalVariables";
import { TrainingPlan } from "../models/trainingPlan";

export const trainingPlanRepository={

    save: function save(trainingPlan: TrainingPlan): void{
        trainingPlanList.push(trainingPlan);
    },

    getAll: function get(): TrainingPlan[]{
        return trainingPlanList;
    }
}

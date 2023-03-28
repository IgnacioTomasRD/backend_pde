import { exerciseList} from "../globalVariables";
import { Exercise } from "../models/exercise";


export const exerciseRepository={

    save: function(exercise: Exercise): void{
        exerciseList.push(exercise);
    },

    getAll: function getAll(): Exercise[]{
        return exerciseList;
    },

    existExercise: function(exercise: Exercise | any): boolean{
        return exerciseList.map(e => e.getName()).includes(exercise.getName());
    },

    findByName: function(name: string | any): Exercise | undefined{
        return exerciseList.find( ex => ex.getName() === name)
    },
}


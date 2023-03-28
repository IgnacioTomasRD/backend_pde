import { DifficultyDTO } from "../DTOS/difficulty.DTO";
import { difficultyList } from "../globalVariables";
import { TypeOfDifficulty } from "../models/TypeOfDifficulty";
import { Weight } from "../models/weight";

export const difficultyRepository={
    getAll: function(): DifficultyDTO[]{
        let difficulty  = Object.values(TypeOfDifficulty).map((t, index )=> new DifficultyDTO(index,t));
        return difficulty;
    },

    getDifficulty: function getDifficulty(typeOfDifficulty: TypeOfDifficulty, weight: Weight){
        let difficulty = difficultyList.find(dif => dif.getTypeOfDifficulty() === typeOfDifficulty && dif.getWeight() === weight);
        return difficulty ? difficulty : difficultyList[0] ;
    }
}
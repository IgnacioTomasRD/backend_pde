import { DifficultyDTO } from "../DTOS/difficulty.DTO";
import { TypeOfDifficulty } from "../models/TypeOfDifficulty";

export const difficultyRepository={
    getAll: function(): DifficultyDTO[]{
        let difficulty  = Object.values(TypeOfDifficulty).map((t, index )=> new DifficultyDTO(index,t));
        return difficulty;
    }
}
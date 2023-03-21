import { TypeOfTrainingDTO } from "../DTOS/typesOfTraining.DTO";
import { TypeOfTraining } from "../models/typeOfTraining";

export const typesOfTrainingRepository={
    getAll: function get(): TypeOfTrainingDTO[]{
        let typesOfTraining  = Object.values(TypeOfTraining).map((t, index )=> new TypeOfTrainingDTO(index,t));
        return typesOfTraining;
    }
}

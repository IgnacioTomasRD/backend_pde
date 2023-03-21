import { WeightDTO } from "../DTOS/weight.DTO";
import { Weight } from "../models/weight";


export const weightRepository = {
    getAll: function(): WeightDTO[]{
        return Object.values(Weight).map((w,i) => new WeightDTO(i,w));
    }
}
import { Muscle } from "./models/muscle";
import { SubMuscle } from "./models/subMuscle";

enum Difficulty{
    FACIL = "FACIL",
    INTERMEDIO = "INTERMEDIO",
    DIFICIL = "DIFICIL"
}
console.log(Object.values(Difficulty)[1]);

const obj = {
    nombre: "nachito",
    edad: 20
}
console.log( Difficulty.FACIL);
console.log( Difficulty.FACIL === Difficulty.FACIL);

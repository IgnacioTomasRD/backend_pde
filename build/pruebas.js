"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Difficulty;
(function (Difficulty) {
    Difficulty["FACIL"] = "FACIL";
    Difficulty["INTERMEDIO"] = "INTERMEDIO";
    Difficulty["DIFICIL"] = "DIFICIL";
})(Difficulty || (Difficulty = {}));
console.log(Object.values(Difficulty)[1]);
const obj = {
    nombre: "nachito",
    edad: 20
};
console.log(Difficulty.FACIL);
console.log(Difficulty.FACIL === Difficulty.FACIL);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Difficulty = void 0;
class Difficulty {
    constructor(reps, series, typeOfDifficulty, peso) {
        this.reps = reps;
        this.series = series;
        this.typeOfDifficulty = typeOfDifficulty;
        this.weight = peso;
    }
    getReps() {
        return this.reps;
    }
    getSeries() {
        return this.series;
    }
    getTypeOfDifficulty() {
        return this.typeOfDifficulty;
    }
    getWeight() {
        return this.weight;
    }
}
exports.Difficulty = Difficulty;

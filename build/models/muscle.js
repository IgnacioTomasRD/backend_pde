"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Muscle = void 0;
class Muscle {
    constructor(name, subMuscles, img) {
        this.name = name;
        this.subMuscles = subMuscles;
        this.img = img;
    }
    getName() {
        return this.name;
    }
}
exports.Muscle = Muscle;

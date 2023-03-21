"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Training = void 0;
class Training {
    constructor(id, name, exercises, muscles) {
        this.id = id;
        this.name = name;
        this.exercises = exercises;
        this.muscles = muscles;
    }
    getName() {
        return this.name;
    }
}
exports.Training = Training;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise = void 0;
class Exercise {
    constructor(name, typeOfTraining, description, musclesInvolved, video) {
        this.name = name;
        this.description = description;
        this.musclesInvolved = musclesInvolved;
        this.video = video;
        this.typesOfTrainingPossible = typeOfTraining;
    }
    getMusclesInvolved() {
        return this.musclesInvolved;
    }
    getName() {
        return this.name;
    }
    getTypesOfTraining() {
        return this.typesOfTrainingPossible;
    }
}
exports.Exercise = Exercise;

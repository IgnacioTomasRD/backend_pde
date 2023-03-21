"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exerciseRepository = void 0;
const globalVariables_1 = require("../globalVariables");
exports.exerciseRepository = {
    save: function (exercise) {
        globalVariables_1.exerciseList.push(exercise);
    },
    getAll: function getAll() {
        return globalVariables_1.exerciseList;
    },
    existExercise: function (exercise) {
        return globalVariables_1.exerciseList.map(e => e.getName()).includes(exercise.getName());
    },
    findByName: function (name) {
        return globalVariables_1.exerciseList.find(ex => ex.getName() === name);
    },
};

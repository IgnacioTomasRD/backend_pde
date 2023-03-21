"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.muscleRepository = void 0;
const globalVariables_1 = require("../globalVariables");
exports.muscleRepository = {
    save: function save(muscle) {
        globalVariables_1.muscleList.push(muscle);
    },
    getAll: function get() {
        return globalVariables_1.muscleList;
    },
};

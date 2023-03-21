"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trainingRepository = void 0;
const globalVariables_1 = require("../globalVariables");
exports.trainingRepository = {
    save: function save(training) {
        globalVariables_1.trainingList.push(training);
    },
    getAll: function getAll() {
        return globalVariables_1.trainingList;
    },
    findByName: function (name) {
        return globalVariables_1.trainingList.find(tr => tr.getName() === name);
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trainingPlanRepository = void 0;
const globalVariables_1 = require("../globalVariables");
exports.trainingPlanRepository = {
    save: function save(trainingPlan) {
        globalVariables_1.trainingPlanList.push(trainingPlan);
    },
    getAll: function get() {
        return globalVariables_1.trainingPlanList;
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typesOfTrainingRepository = void 0;
const typesOfTraining_DTO_1 = require("../DTOS/typesOfTraining.DTO");
const typeOfTraining_1 = require("../models/typeOfTraining");
exports.typesOfTrainingRepository = {
    getAll: function get() {
        let typesOfTraining = Object.values(typeOfTraining_1.TypeOfTraining).map((t, index) => new typesOfTraining_DTO_1.TypeOfTrainingDTO(index, t));
        return typesOfTraining;
    }
};

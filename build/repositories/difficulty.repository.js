"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.difficultyRepository = void 0;
const difficulty_DTO_1 = require("../DTOS/difficulty.DTO");
const globalVariables_1 = require("../globalVariables");
const TypeOfDifficulty_1 = require("../models/TypeOfDifficulty");
exports.difficultyRepository = {
    getAll: function () {
        let difficulty = Object.values(TypeOfDifficulty_1.TypeOfDifficulty).map((t, index) => new difficulty_DTO_1.DifficultyDTO(index, t));
        return difficulty;
    },
    getDifficulty: function getDifficulty(typeOfDifficulty, weight) {
        let difficulty = globalVariables_1.difficultyList.find(dif => dif.getTypeOfDifficulty() === typeOfDifficulty && dif.getWeight() === weight);
        return difficulty ? difficulty : globalVariables_1.difficultyList[0];
    }
};

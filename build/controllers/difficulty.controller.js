"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.difficultyController = void 0;
const difficulty_repository_1 = require("../repositories/difficulty.repository");
exports.difficultyController = {
    getAll: function (req, res) {
        res.send(JSON.stringify(difficulty_repository_1.difficultyRepository.getAll()));
    }
};

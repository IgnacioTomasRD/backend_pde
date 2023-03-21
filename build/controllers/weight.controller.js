"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weightController = void 0;
const weight_repository_1 = require("../repositories/weight.repository");
exports.weightController = {
    getWeights: function (req, res) {
        res.send(JSON.stringify(weight_repository_1.weightRepository.getAll()));
    }
};

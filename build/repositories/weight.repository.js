"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weightRepository = void 0;
const weight_DTO_1 = require("../DTOS/weight.DTO");
const weight_1 = require("../models/weight");
exports.weightRepository = {
    getAll: function () {
        return Object.values(weight_1.Weight).map((w, i) => new weight_DTO_1.WeightDTO(i, w));
    }
};

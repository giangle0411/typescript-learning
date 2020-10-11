"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    // 28/10/2020
    var dateParts = dateString
        .split('/') // ['28', '10', '2018']
        .map(function (value) {
        return parseInt(value);
    });
    //dateParts[1] - 1 because month in date constructor is zero index
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

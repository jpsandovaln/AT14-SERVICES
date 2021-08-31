"use strict";
/**
 * @Class
 * Build an instance
 *
 */
exports.__esModule = true;
var MachineLearning = /** @class */ (function () {
    function MachineLearning(imagePath, searchWord, percentage) {
        this.image = imagePath;
        this.searchWord = searchWord;
        this.percentage = percentage;
        this.predictions = [];
    }
    return MachineLearning;
}());
exports["default"] = MachineLearning;

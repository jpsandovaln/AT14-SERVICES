"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Class
 * Build an instance
 *
 */
class MachineLearing {
    constructor(imagePath, searchWord, percentage) {
        this.image = imagePath;
        this.searchWord = searchWord;
        this.percentage = percentage;
        this.predictions = [];
    }
}
exports.default = MachineLearing;

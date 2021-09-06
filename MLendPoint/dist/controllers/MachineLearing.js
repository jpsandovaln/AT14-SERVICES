"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emptyValidation_1 = require("../common/validation/emptyValidation");
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
    validateParameter() {
        const validations = [
            new emptyValidation_1.EmptyValidation("imagePath", this.image),
            new emptyValidation_1.EmptyValidation("searchWord", this.searchWord),
            new emptyValidation_1.EmptyValidation("percentage", this.percentage),
            new emptyValidation_1.EmptyValidation("predictions", this.predictions),
        ];
        validations.forEach((validation) => {
            validation.validate();
        });
    }
}
exports.default = MachineLearing;

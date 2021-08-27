"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analize = /** @class */ (function () {
    function analize(imagePaths, searchWord, percentage, secondsToString, algorithm, pathImage) {
        this._imagePaths = imagePaths;
        this._searchWord = searchWord;
        this._percentage = percentage;
        this._secondsToString = secondsToString;
        this._algorithm = algorithm;
        this._pathImage = pathImage;
    }
    Object.defineProperty(analize.prototype, "imagePaths", {
        get: function () {
            return this._imagePaths;
        },
        set: function (imagePaths) {
            this._imagePaths = imagePaths;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(analize.prototype, "searchWord", {
        get: function () {
            return this._searchWord;
        },
        set: function (searchWord) {
            this._searchWord = searchWord;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(analize.prototype, "percentage", {
        get: function () {
            return this._percentage;
        },
        set: function (percentage) {
            this._percentage = percentage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(analize.prototype, "secondsToString", {
        get: function () {
            return this._secondsToString;
        },
        set: function (secondsToString) {
            this._secondsToString = secondsToString;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(analize.prototype, "algorithm", {
        get: function () {
            return this._algorithm;
        },
        set: function (algorithm) {
            this._algorithm = algorithm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(analize.prototype, "pathImage", {
        get: function () {
            return this._pathImage;
        },
        set: function (pathImage) {
            this._pathImage = pathImage;
        },
        enumerable: false,
        configurable: true
    });
    return analize;
}());
exports.default = analize;
//# sourceMappingURL=analize.js.map
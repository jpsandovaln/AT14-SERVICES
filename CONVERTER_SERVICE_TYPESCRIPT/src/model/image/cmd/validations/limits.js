"use strict";
exports.__esModule = true;
exports.Limits = void 0;
var Limits = /** @class */ (function () {
    function Limits(min, max) {
        this.MIN_VALUE = min;
        this.MAX_VALUE = max;
    }
    Limits.prototype.isValid = function (value) {
        return value >= this.MIN_VALUE && value <= this.MAX_VALUE
            ? true
            : false;
    };
    return Limits;
}());
exports.Limits = Limits;

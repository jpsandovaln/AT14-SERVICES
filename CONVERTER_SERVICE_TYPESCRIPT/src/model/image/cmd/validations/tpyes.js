"use strict";
exports.__esModule = true;
exports.Types = void 0;
var Types = /** @class */ (function () {
    function Types() {
    }
    Types.prototype.isNumber = function (value) {
        return typeof value == "number" ? true : false;
    };
    Types.prototype.isBoolean = function (value) {
        return value == true || value == false ? true : false;
    };
    return Types;
}());
exports.Types = Types;

"use strict";
exports.__esModule = true;
exports.Command = void 0;
var Command = /** @class */ (function () {
    function Command(parameters) {
        this.parameters = parameters;
    }
    Command.prototype.getParameter = function (key) {
        if (key != undefined)
            return this.parameters.getParameter(key);
        else
            return undefined;
    };
    Command.prototype.getParameters = function () {
        return this.parameters;
    };
    return Command;
}());
exports.Command = Command;

"use strict";
exports.__esModule = true;
exports.BuildCmd = void 0;
var BuildCmd = /** @class */ (function () {
    function BuildCmd(params) {
        this.params = params;
    }
    BuildCmd.prototype.getParameters = function () {
        return this.params;
    };
    BuildCmd.prototype.getParameter = function (key) {
        if (key != undefined)
            return this.params.getParameter(key);
        else
            return undefined;
    };
    return BuildCmd;
}());
exports.BuildCmd = BuildCmd;

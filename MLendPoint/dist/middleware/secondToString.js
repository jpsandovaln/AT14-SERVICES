"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SecondsToString = /** @class */ (function () {
    function SecondsToString() {
    }
    SecondsToString.prototype.parse = function (seconds) {
        var hour = Math.floor(seconds / 3600);
        var hourToString = hour < 10 ? "0" + hour.toString() : hour.toString();
        var minute = Math.floor((seconds / 60) % 60);
        var minuteToString = minute < 10 ? "0" + minute.toString() : minute.toString();
        var second = seconds % 60;
        var secondsToString = second < 10 ? "0" + second.toString() : second.toString();
        return hourToString + ":" + minuteToString + ":" + secondsToString;
    };
    return SecondsToString;
}());
exports.default = SecondsToString;
//# sourceMappingURL=secondToString.js.map
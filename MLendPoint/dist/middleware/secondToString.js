"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SecondsToString {
    parse(seconds) {
        const hour = Math.floor(parseInt(seconds) / 3600);
        const hourToString = hour < 10 ? "0" + hour.toString() : hour.toString();
        const minute = Math.floor((parseInt(seconds) / 60) % 60);
        const minuteToString = minute < 10 ? "0" + minute.toString() : minute.toString();
        const second = parseInt(seconds) % 60;
        const secondsToString = second < 10 ? "0" + second.toString() : second.toString();
        return hourToString + ":" + minuteToString + ":" + secondsToString;
    }
}
exports.default = SecondsToString;

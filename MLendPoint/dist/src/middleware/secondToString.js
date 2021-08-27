"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SecondsToString {
    parse(seconds) {
        const hour = Math.floor(seconds / 3600);
        const hourToMessage = hour < 10 ? "0" + hour : hour;
        const minute = Math.floor((seconds / 60) % 60);
        const minuteToMessage = minute < 10 ? "0" + minute : minute;
        const second = seconds % 60;
        const secondToMessage = second < 10 ? "0" + second : second;
        return hourToMessage + ":" + minuteToMessage + ":" + secondToMessage;
    }
}
exports.default = SecondsToString;

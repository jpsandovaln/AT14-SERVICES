class SecondsToString {
    constructor() {}

    parse(seconds: number) {
        const hour = Math.floor(seconds / 3600);
        const hourToMessage = hour < 10 ? "0" + hour : hour;
        const minute = Math.floor((seconds / 60) % 60);
        const minuteToMessage = minute < 10 ? "0" + minute : minute;
        const second = seconds % 60;
        const secondToMessage = second < 10 ? "0" + second : second;

        return hourToMessage + ":" + minuteToMessage + ":" + secondToMessage;
    }
}

export default SecondsToString;

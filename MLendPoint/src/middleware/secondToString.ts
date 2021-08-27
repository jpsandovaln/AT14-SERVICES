class SecondsToString {
    parse(seconds: number): string {
        const hour: number = Math.floor(seconds / 3600);
        const hourToString: string =
            hour < 10 ? "0" + hour.toString() : hour.toString();
        const minute = Math.floor((seconds / 60) % 60);
        const minuteToString: string =
            minute < 10 ? "0" + minute.toString() : minute.toString();
        const second = seconds % 60;
        const secondsToString: string =
            second < 10 ? "0" + second.toString() : second.toString();
        return hourToString + ":" + minuteToString + ":" + secondsToString;
    }
}

export default SecondsToString;

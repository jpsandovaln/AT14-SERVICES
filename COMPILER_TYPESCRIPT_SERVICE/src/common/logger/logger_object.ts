export class LoggerObject {
    private currentDate: Date;

    constructor() {
        this.currentDate = new Date();
    }

    public info(msg: string) {
        const message: string = this.currentDate.toISOString() + ': ' + msg;
        console.info(message);
    }

    public error(msg: String, code: string) {
        const message: string = this.currentDate.toISOString() + ':' + code + ':: ' + msg;
        console.info(message);
    }
}

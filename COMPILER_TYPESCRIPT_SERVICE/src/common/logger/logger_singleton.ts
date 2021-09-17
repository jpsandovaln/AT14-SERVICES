import { LoggerObject } from "./logger_object";

export class LoggerSingleton {
    private static instance: LoggerSingleton;
    private loggerObject: LoggerObject;

    private constructor() {
        this.loggerObject = new LoggerObject();
    }

    public static getInstance(): LoggerSingleton {
        if (!LoggerSingleton.instance) {
            LoggerSingleton.instance = new LoggerSingleton();
        }
        return LoggerSingleton.instance;
    }

    public getLogger(): LoggerObject {
        return this.loggerObject;
    }
}

import { LoggerSingleton } from "./logger_singleton";

export class Logger {
    public static info(msg: string) {
        return LoggerSingleton.getInstance().getLogger().info(msg);
    }

    public static error(msg: string, code: string) {
        return LoggerSingleton.getInstance().getLogger().error(msg, code);
    }
}

import cors from 'cors';
import express from 'express';
import Routes from './routers/compile_routers';
import * as dotenv from "dotenv";
import { LoggerObject } from './common/logger/logger_object';
import { LoggerSingleton } from './common/logger/logger_singleton';
import { Logger } from './common/logger/logger';

dotenv.config({ path:  './.env' });

const corsOptions: Object = { 
    origin: process.env.COMPILER_APP + ":" + process.env.COMPILER_PORT
};
const port: string | undefined = process.env.COMPILER_PORT;
const app = express();

class App {

    private logger: LoggerObject;
    constructor() {
        this.logger = new LoggerObject();
        this.setConfigs();
        this.init(port);
    }

    private init(port: string | undefined): void {
        this.logger.info("init method started");
        LoggerSingleton.getInstance().getLogger().info("init method started singleton");
        Logger.info("init method started facade");
        app.listen(port, (): void => {
            console.log("Running at http://localhost:" + port);
        });
        this.logger.error("init method finished", "abc123456");
        LoggerSingleton.getInstance().getLogger().error("init method finished singleton", "abc123456");
        Logger.error("init method finished singleton facade", "abc123456");
    }

    private setConfigs(): void {
        app.use(cors(corsOptions));
        app.use(express.urlencoded({ extended: true }));
        new Routes(app);
    }
}

new App();

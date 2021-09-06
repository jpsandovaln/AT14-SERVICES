import { IConfig } from "./interfaces/config.interface";
import dotenv from "dotenv";

import Logger from "../utilities/logger";
export abstract class Config implements IConfig {
    logger: any;

    constructor() {
        this.initEnv();
        this.execute();
    }
    private initEnv(): void {
        dotenv.config();
        this.logger = Logger;
    }
    public execute(): void {}
}

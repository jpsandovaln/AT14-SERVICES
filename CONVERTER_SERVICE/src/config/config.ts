import { IConfig } from "./interfaces/config.interface";
import dotenv from "dotenv";

export abstract class Config implements IConfig {
    constructor() {
        this.initEnv();
        this.execute();
    }
    private initEnv(): void {
        dotenv.config();
    }
    public execute(): void {}
}

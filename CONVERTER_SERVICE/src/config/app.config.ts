import { IAppConfig } from "./interfaces/app.config.interface";
import { Config } from "./config";

import cors from "cors";
import express from "express";

export abstract class AppConfig extends Config implements IAppConfig {
    corsOptions = { origin: "http://localhost:8080" };
    port = process.env.PORT;
    root = process.env.ROOT;
    app = express();

    constructor() {
        super();
        this.initAppConfigs();
    }

    public initAppConfigs() {
        this.app.use(cors(this.corsOptions));
        this.app.use(express.urlencoded({ extended: true }));
    }
}

import { IAppConfig } from "./interfaces/app.config.interface";
import { Config } from "./config";

import cors from "cors";
import express from "express";
import morganMiddleware from "../middleware/morgan";

export abstract class AppConfig extends Config implements IAppConfig {
    corsOptions = { origin: "http://localhost:8080" };
    port = process.env.PORT_CONVERTER;
    root = process.env.BASE_URL_CONVERTER;
    app = express();

    constructor() {
        super();
        this.initAppConfigs();
    }

    public initAppConfigs() {
        this.app.use(cors(this.corsOptions));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morganMiddleware);
    }
}

import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import morganMiddleware from "./src/middleware/common/morgan";
import logger from "./src/utilities/logger";

const app = express();
class Index {
    port: string | undefined;
    corsOptions: object;

    constructor() {
        dotenv.config();

        this.port = process.env.PORT_CONVERTER;
        this.corsOptions = {
            origin: [
                "http://localhost:8080",
                "http://localhost:4000",
                "http://localhost:8081",
            ],
        };
        this.initConfigs();
        //new Routes(app);
        this.init();
    }

    private initConfigs() {
        app.use(cors(this.corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(morganMiddleware);
    }

    private init() {
        app.listen(this.port, () => {
            logger.debug("Running at http://localhost:" + this.port);
        });
    }
}

new Index();

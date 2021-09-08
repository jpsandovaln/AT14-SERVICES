import morganMiddleware from "./src/middleware/common/morgan";
import logger from "./src/utilities/logger";
import { IApp } from "./appInterface";
//import { ImageRoutes } from "./src/routes/image/imageRoutes";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
class Index implements IApp {
    port;
    corsOptions;

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
        //new ImageRoutes(app);
        this.initApp();
    }

    private initConfigs() {
        app.use(cors(this.corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(morganMiddleware);
    }

    private initApp() {
        app.listen(this.port, () => {
            logger.debug("Running at http://localhost:" + this.port);
        });
    }
}

new Index();

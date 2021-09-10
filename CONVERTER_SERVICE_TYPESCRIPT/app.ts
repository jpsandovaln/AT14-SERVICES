import morganMiddleware from "./src/middleware/common/morgan";
import logger from "./src/utilities/logger";
import { IApp } from "./appInterface";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { RoutesVideo } from "./src/routes/video/routesVideo";
import { Property } from "./src/utilities/property";
import { RoutesImage } from "./src/routes/image/routesImage";
import { RoutesAudio } from "./src/routes/audio/routesAudio";
import { ConnectMongo } from "./src/database/connection/connect";

const app = express();
class Index implements IApp {
    corsOptions = {
        origin: [
            "http://localhost:8080",
            "http://localhost:4000",
            "http://localhost:8081",
        ],
    };

    constructor() {
        dotenv.config();

        this.initConfigs();
        this.initRoutes();
        this.initMongoose();
        this.initApp();
    }

    private initConfigs() {
        app.use(cors(this.corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(morganMiddleware);
    }

    public initRoutes() {
        new RoutesImage(app).getRoutes();
        new RoutesVideo(app).getRoutes();
        new RoutesAudio(app).getRoutes();
    }

    public initMongoose() {
        ConnectMongo.connect();
    }

    private initApp() {
        app.listen(Property.getPort(), () => {
            logger.debug("Running at http://localhost:" + Property.getPort());
        });
    }
}

new Index();

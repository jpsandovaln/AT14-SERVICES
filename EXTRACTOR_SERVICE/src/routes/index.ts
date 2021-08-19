import { Controller } from "../controller/controller";
import express from "express";

const controller = new Controller({ params: "Hello world" });

const router = express.Router();

class Routes {
    constructor(app = express()) {
        router.get("/", controller.test);
        app.use(router);
    }
}

export { Routes };

import { Controller } from "../controller/controller";
import express from "express";

const controller = new Controller();

const router = express.Router();

class Routes {
    constructor(app = express()) {
        router.get("/test", controller.test({ message: "test" }));
        router.get("/", controller.print);
        app.use(router);
    }
}

export { Routes };

import { Controller } from "../controller/controller";
import express from "express";

const controller = new Controller();

const router = express.Router();

class Routes {
    constructor(app = express()) {
        router.get("/", controller.test);
        app.use(router);
    }
}

export { Routes };

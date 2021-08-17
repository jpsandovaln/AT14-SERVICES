import express from "express";
import { test } from "../controller/controller";

const router = express.Router();

class Routes {
    constructor(app = express()) {
        router.get("/test");
        app.use(router);
    }
}

export { Routes };

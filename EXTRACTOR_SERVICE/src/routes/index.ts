import { FileController } from "../controller/file.controller";
import express from "express";

const controller = new FileController();

const router = express.Router();

class Routes {
    constructor(app = express()) {
        router.get("/upload", controller.upload);
        app.use(router);
    }
}
export { Routes };

/*
const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");

let routes = (app) => {
    router.post("/upload", controller.upload);
    router.get("/files", controller.getListFiles);
    router.get("/files/:name", controller.download);

    app.use(router);
};

module.exports = routes;
*/

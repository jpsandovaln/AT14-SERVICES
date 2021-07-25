const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");

class Routes {
    constructor(app) {
        router.post("/converter", controller.upload);
        router.post("/upload", controller.upload);
        router.get("/files", controller.getListFiles);
        router.get("/files/:name", controller.download);
        router.get("/download", controller.zipDownload);

        app.use(router);
    }
}

module.exports = Routes;
const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");
const controllerImagenes = require("../controller/ImagesController");


class Routes {
    constructor(app) {
       // router.post("/upload", controller.upload);
      //  router.get("/files", controller.getListFiles);
       // router.get("/files/:name", controller.download);
       // router.get("/download", controller.zipDownload);
        router.post("/uploadImages", controllerImagenes.upload);
        router.get("/images", controllerImagenes.getImage);
        app.use(router);
    }
}

module.exports = Routes;


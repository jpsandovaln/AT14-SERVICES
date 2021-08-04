const express = require("express");
const router = express.Router();
const controllerImagenes = require("../controller/ImagesController");
const controller = require("../controller/file.controller");
class Routes {
    constructor(app) {
        router.post("/converter", controller.upload);
        router.post("/upload", controller.upload);
        router.get("/files", controller.getListFiles);
        router.get("/files/:name", controller.download);
        router.post(
            "/ChangeImageFormat",
            controllerImagenes.endPointToChangeImageFormat
        );
        router.post(
            "/ChangeImageDirection",
            controllerImagenes.endPointToChangeImageDirection
        );
        router.post(
            "/ChangeImageDoubling",
            controllerImagenes.endPointToChangeImageDoubling
        );
        router.post(
            "/ChangeImageMonochrome",
            controllerImagenes.endPointToChangeImageMonochrome
        );
        router.post(
            "/ChangeImagePaint",
            controllerImagenes.endPointToChangeImagePaint
        );
        router.post(
            "/ChangeImageQuality",
            controllerImagenes.endPointToChangeImageQuality
        );
        router.post(
            "/ChangeImageResize",
            controllerImagenes.endPointToChangeImageResize
        );
        router.post(
            "/ChangeImageToGrayscale",
            controllerImagenes.endPointToChangeImageToGrayscale
        );
        app.use(router);
    }
}

module.exports = Routes;

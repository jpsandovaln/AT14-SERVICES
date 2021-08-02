const express = require("express");
const router = express.Router();
const controllerImagenes = require("../controller/ImagesController");

class Routes {
    constructor(app) {
        // router.post("/upload", controller.upload);
        // router.get("/files", controller.getListFiles);
        // router.get("/files/:name", controller.download);
        // router.get("/download", controller.zipDownload);
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

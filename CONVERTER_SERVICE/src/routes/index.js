const express = require("express");
const router = express.Router();
const { changeVideoFormat, download } = require("../controller/VideoController");
const {
    getData,
    deleteDataById,
    findDataById,
    updateDataById,
} = require("../controller/fileController");
const uploadFilesMiddleware = require("../middleware/uploadFiles");
const { obtainMetadata, downloadMetadata } = require("../controller/metadataController");

class Routes {
    constructor(app) {
        router.post("/filesMetadata", obtainMetadata);
        router.get("/filesMetadata/:name", downloadMetadata);
        router.post(
            "/videoConverter",
            [uploadFilesMiddleware],
            changeVideoFormat
        );
        router.get("/files/:name", download);
        router.get("/file", getData);
        router.delete("/file/:id", deleteDataById);
        router.get("/file/:id", findDataById);
        router.put("/file/:id", updateDataById);

        app.use(router);
    }
}

module.exports = Routes;

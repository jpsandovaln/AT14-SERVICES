const express = require("express");
const router = express.Router();
const { changeVideoFormat, download } = require("../controller/videoController");
const { framesZipML, downloadMLZip } = require("../controller/MLController");
const { obtainMetadata, downloadMetadata } = require("../controller/metadataController");
const {
    getData,
    deleteDataById,
    findDataById,
    updateDataById,
} = require("../controller/fileController");
const uploadFilesMiddleware = require("../middleware/uploadFiles");
const cors = require('cors')

class Routes {
    constructor(app) {
        router.post("/filesMetadata", obtainMetadata);
        router.get("/filesMetadata/:name", downloadMetadata);
        router.post("/videoConverter", [uploadFilesMiddleware], changeVideoFormat);        
        router.get("/files/:name", download);
        router.post("/frames", framesZipML);
        router.get("/framesZipML/:name", downloadMLZip);        
        router.get("/file", getData);
        router.delete("/file/:id", deleteDataById);
        router.get("/file/:id", findDataById);
        router.put("/file/:id", updateDataById);
        app.use(cors());
        app.use(router);
    }
}

module.exports = Routes;

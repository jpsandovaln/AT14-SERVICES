const express = require("express");
const router = express.Router();
//const controllerImagenes = require("../controller/ImagesController");
const changeVideoFormat = require("../controller/VideoController");
//const controller = require("../controller/file.controller");
const {
    getData,
    deleteDataById,
    findDataById,
    updateDataById,
} = require("../controller/fileController");
const uploadFilesMiddleware = require("../middleware/uploadFiles");

class Routes {
    constructor(app) {
        
        router.post("/videoConverter", [uploadFilesMiddleware],changeVideoFormat.changeVideoFormat);
        router.get("/file", getData);
        router.delete("/file/:id", deleteDataById);
        router.get("/file/:id", findDataById);
        router.put("/file/:id", updateDataById);
        
        app.use(router);
    }
}

module.exports = Routes;

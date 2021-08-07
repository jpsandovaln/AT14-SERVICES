const express = require("express");
const router = express.Router();
const controllerImagenes = require("../controller/ImagesController");
const changeVideoFormat = require("../controller/VideoController");
const controller = require("../controller/file.controller");
const {
    getData,
    deleteDataById,
    findDataById,
    updateDataById,
} = require("../controller/file.controller");

class Routes {
    constructor(app) {
        
        router.post("/videoConverter", changeVideoFormat);
        router.post("/converter", controller.upload);
        router.post("/upload", controller.upload);
        router.get("/files", controller.getListFiles);
        router.get("/files/:name", controller.download);
        router.get("/data", getData);
        router.delete("/delete/:id", deleteDataById);
        router.get("/find/:id", findDataById);
        router.put("/update/:id", updateDataById);

        app.use(router);
    }
}

module.exports = Routes;

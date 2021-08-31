const express = require("express");
const path = require("path");
const upload = require("../middleware/imageFilter");
const ObtainDirectory = require("../middleware/obtainDirectory");
const router = express.Router();
const UnZip = require("../middleware/unzip");
const SecondsToString = require("../middleware/secondToString");
const analizeCocoSSD = require("../middleware/analizeCocoSSD");
const analizeMobilNet = require("../middleware/analizeMobilNet");
const BuildArrayImages = require("../middleware/buildArrayImages");
 
router.get("/", (req, res) => {
    const json = {};
    res.json(json);
});
 
router.post("/", upload.single("zipFile"), async (req, res) => {
    const file = req.file;
    const searchWord = req.body.searchWord;
    const percentage = req.body.percentage;
    const zipNameFile = req.file.filename;
    const pathFile = req.file.path;
    const algorithm = req.body.algorithm;
    const extension = path.extname(file.originalname);
    const fileName = path.basename(file.originalname, extension);
 
    const pathImage =
        "http://localhost:8085/unZipFiles/" +
        path.parse(zipNameFile).name +
        "/";
    const obtainDirectory = new ObtainDirectory();
    const buildArrayImages = new BuildArrayImages();
    const unzip = new UnZip();
    const secondsToString = new SecondsToString();
    const unzipOutput = path.join(
        __dirname ,
        "/../../public/unZipFiles/" + path.parse(zipNameFile).name
    );
    unzip.extractZip(pathFile, unzipOutput);
    const zipPath = obtainDirectory.filesList(unzipOutput);
    const files = buildArrayImages.buildArrayImages(zipPath, unzipOutput);
  
    if (algorithm == "CocoSSD") {
        const learning = new analizeCocoSSD(
            files,
            searchWord,
            percentage,
            secondsToString,
            algorithm,
            pathImage
        );
        let response = await learning.recognition();
        res.send(response);
    }
 
    if (algorithm == "MobilNet") {
        const learning = new analizeMobilNet(
            files,
            searchWord,
            percentage,
            secondsToString,
            algorithm,
            pathImage
        );
        let response = await learning.recognition();
        res.send(response);
    }
});
 
module.exports = router;
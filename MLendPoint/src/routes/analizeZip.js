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

router.post("/", upload.single("zipFile"), async (req, res) => {
    const file = req.file;
    /*if (!file) {
        const error = new Error("Please upload a file");
        error.httpStatusCode = 400;
        return next(error);
    }*/
    //res.send(file)

    const searchWord = req.body.searchWord;
    const percentage = req.body.percentage;
    const zipNameFile = req.file.filename;
    const pathFile = req.file.path;
    const algorithm = req.body.algorithm;
    /*HARD CODE*/
    const extension = path.extname(file.originalname);
    const  fileName= path.basename(file.originalname,extension);
    
    const pathImage =
        "http://localhost:8080/unZipFiles/" +
        path.parse(zipNameFile).name +
        "/" +
        fileName +
        "/";
    const obtainDirectory = new ObtainDirectory();
    const buildArrayImages = new BuildArrayImages();
    const unzip = new UnZip();
    const secondsToString = new SecondsToString();

    const unzipOutput =
        __dirname + "/../../public/unZipFiles/" + path.parse(zipNameFile).name;
    unzip.extractZip(pathFile, unzipOutput);

    const zipPath = obtainDirectory.filesList(unzipOutput);
    const imagePaths = obtainDirectory.filesList(unzipOutput + "/" + zipPath);

    const files = buildArrayImages.buildArrayImages(imagePaths, unzipOutput,fileName);

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

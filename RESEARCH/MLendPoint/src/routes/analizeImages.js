require("dotenv").config("../../.env");
const express = require("express");
const path = require("path");
const upload = require("../middleware/imageFilter");
const ObtainDirectory = require("../middleware/obtainDirectory");
const router = express.Router();
const UnZip = require("../middleware/unzip");
const SecondsToString = require("../middleware/secondToString");
const analizeCocoSSD = require("../middleware/analizeCocoSSD");
const analizeMobilNet = require("../middleware/analizeMobilNet");

const port = process.env.PORT || 8085;
const hostname = process.env.HOSTNAME || 'localhost';

router.post("/", upload.array("Images"), async (req, res) => {
    const files = req.files;
    const searchWord = req.body.searchWord;
    const percentage = req.body.percentage;
    const algorithm = req.body.algorithm;
    const pathImage = `http://${hostname}:${port}/images/`;
    
    const secondsToString = new SecondsToString();

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
            algorithm
        );
        let response = await learning.recognition();
        res.send(response);
    }
});

module.exports = router;

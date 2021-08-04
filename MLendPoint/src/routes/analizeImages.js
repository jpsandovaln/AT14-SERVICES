const express = require("express");
const path = require("path");
const upload = require("../middleware/imageFilter");
const ObtainDirectory = require("../middleware/obtainDirectory");
const router = express.Router();
const UnZip = require("../middleware/unzip");
const SecondsToString = require("../middleware/secondToString");
const analizeCocoSSD = require("../middleware/analizeCocoSSD");
const analizeMobilNet = require("../middleware/analizeMobilNet");

router.post("/", upload.array("Images"), async (req, res) => {
    const files = req.files;
    /*if (!files) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }*/
    //res.send(files);
    const searchWord = req.body.searchWord;
    const percentage = req.body.percentage;
    const algorithm = req.body.algorithm;
    const pathImage = "http://localhost:8080/images/";

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

        console.info(response);
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

        console.info(response);
        res.send(response);
    }
});

module.exports = router;

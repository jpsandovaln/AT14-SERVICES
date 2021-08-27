import express from "express";
import path from "path";
import upload from "../middleware/imageFilter";
import ObtainDirectory from "../middleware/obtainDirectory";
import UnZip from "../middleware/unzip";
import SecondsToString from "../middleware/secondToString";
import analizeCocoSSD from "../middleware/analizeCocoSSD";
import analizeMobilNet from "../middleware/analizeMobilNet";

const router = express.Router();

router.post("/", upload.array("Images"), async (req, res) => {
    const files = req.files;
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
        const response = await learning.recognition();
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
        const response = await learning.recognition();
        res.send(response);
    }
});

export default router;

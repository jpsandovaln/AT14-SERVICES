import express from "express";
import path from "path";
import upload from "../middleware/imageFilter";
import ObtainDirectory from "../middleware/obtainDirectory";
import UnZip from "../middleware/unzip";
import SecondsToString from "../middleware/secondToString";
import analizeCocoSSD from "../middleware/analizeCocoSSD";
import analizeMobilNet from "../middleware/analizeMobilNet";
import BuildArrayImages from "../middleware/buildArrayImages";

const router = express.Router();

router.get("/", (req, res) => {
    const json = {};
    res.json(json);
});

router.post("/", upload.single("zipFile"), async (req, res) => {
    const file: any = req.file;
    const searchWord: string = req.body.searchWord;
    const percentage: number = req.body.percentage;
    const zipNameFile: any = file.filename;
    const pathFile = file.path;
    const algorithm: string = req.body.algorithm;
    const extension = path.extname(file.originalname);
    const fileName = path.basename(file.originalname, extension);

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

    const zipPath: string[] = obtainDirectory.filesList(unzipOutput);

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
        const response = await learning.recognition();
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
        const response = await learning.recognition();
        res.send(response);
    }
});

export default router;

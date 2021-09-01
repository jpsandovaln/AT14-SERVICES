import { Request, Response, Router } from "express";
import * as path from "path";
import upload from "../middleware/imageFilter";
import ObtainDirectory from "../middleware/obtainDirectory";
import UnZip from "../middleware/unzip";
import SecondsToString from "../middleware/secondToString";
import analizeCocoSSD from "../middleware/analizeCocoSSD";
import analizeMobilNet from "../middleware/analizeMobilNet";
import BuildArrayImages from "../middleware/buildArrayImages";

class AnalizeZip {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }
    routes() {
        this.router.get("/", (req: Request, res: Response) => {
            const json = {};
            res.json(json);
        });

        this.router.post(
            "/",
            upload.single("zipFile"),
            async (req: Request, res: Response) => {
                const file = req.file;
                const searchWord: string = req.body.searchWord;
                const percentage: number = req.body.percentage;
                const zipNameFile = file?.filename;
                const pathFile = file?.path;
                const algorithm: string = req.body.algorithm;
                const extension = path.extname(file?.originalname as string);
                const fileName = path.basename(
                    file?.originalname as string,
                    extension
                );

                const pathImage =
                    "http://localhost:8085/unZipFiles/" +
                    path.parse(zipNameFile as string).name +
                    "/";
                const obtainDirectory = new ObtainDirectory();
                const buildArrayImages = new BuildArrayImages();
                const unzip = new UnZip();
                const secondsToString = new SecondsToString();

                const unzipOutput =
                    __dirname +
                    "/../../public/unZipFiles/" +
                    path.parse(zipNameFile as string).name;
                unzip.extractZip(pathFile as string, unzipOutput);

                const zipPath: string[] =
                    obtainDirectory.filesList(unzipOutput);

                const files = buildArrayImages.buildArrayImages(
                    zipPath,
                    unzipOutput
                );

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
            }
        );
    }
}

const analizeZip = new AnalizeZip();
analizeZip.routes();
export default analizeZip.router;

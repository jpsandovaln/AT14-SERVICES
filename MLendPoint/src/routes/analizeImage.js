const express = require("express");
const path = require("path");
const upload = require("../middleware/imageFilter");
const ObtainDirectory = require("../middleware/obtainDirectory");
const CocoSSD = require("../controllers/CocoSSD");
const MobilNet = require("../controllers/MobilNet");
const router = express.Router();
const fs = require("fs");
const UnZip = require("../middleware/unzip");
const SecondsToString = require("../middleware/secondToString");

router.get("/", (req, res) => {
    const json = {
        name: "Video",
        objects: {
            dogs: [
                {
                    positionX: 40,
                    positionY: 40,
                },
            ],
            cats: [
                {
                    positionX: 40,
                    positionY: 40,
                },
            ],
        },
    };
    res.json(json);
});

router.post("/", upload.single('zipFile'), async (req, res)=> {
    
    const searchWord = req.body.searchWord;
    const percentage = req.body.percentage;
    const obtainDirectory = new ObtainDirectory();
    const zipNameFile = req.file.filename;
    const pathFile = req.file.path;
    const unzipOutput = __dirname + '/../../public/unZipFiles/' + path.parse(zipNameFile).name;
    
    const unzip = new UnZip();
    unzip.extractZip(pathFile, unzipOutput);

    const zipPath = obtainDirectory.filesList(unzipOutput);
    const imagePaths = obtainDirectory.filesList(unzipOutput + "/" + zipPath[0]);

    secondsToString = new SecondsToString();
    var response  = [];
    for (const image of imagePaths) {        
        const machineLearning = new CocoSSD(unzipOutput + "/" + zipPath[0] + "/" + image, searchWord, percentage);
        const result = await machineLearning.getJSON(); 
        if(result[0] !== undefined) {            
            const objectResult = JSON.parse(result[0]);
            const objectResponse = {
                Algorithm: "CocoSSD",
                Word: searchWord,
                Percentage: objectResult.probability,
                Second: secondsToString.parse(path.parse(image).name),
            };
            const auxi = JSON.stringify(objectResponse);
            response.push(auxi);
        }                
    } 
    
    console.info(response);

    res.send( response );
});


module.exports = router;

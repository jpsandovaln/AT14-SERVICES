const express = require("express");
const path = require("path");
const upload = require("../middleware/imageFilter");
const ObtainDirectory = require("../middleware/obtainDirectory");
const router = express.Router();
const UnZip = require("../middleware/unzip");
const SecondsToString = require("../middleware/secondToString");
const analizeCocoSSD = require("../middleware/analizeCocoSSD")
const analizeMobilNet = require("../middleware/analizeMobilNet")

router.post("/", upload.single('zipFile'), async (req, res)=> {
    
    const searchWord =  req.body.searchWord;
    const percentage = req.body.percentage;
    const zipNameFile = req.file.filename;
    const pathFile = req.file.path;
    const algorithm = req.body.algorithm;

    
    const obtainDirectory = new ObtainDirectory(); 
    const unzipOutput = __dirname + '/../../public/unZipFiles/' + path.parse(zipNameFile).name; 
    const unzip = new UnZip();
    unzip.extractZip(pathFile, unzipOutput);

    const zipPath = obtainDirectory.filesList(unzipOutput);
    const imagePaths = obtainDirectory.filesList(unzipOutput + "/" + zipPath[0]);

    const secondsToString = new SecondsToString();
    
    async function callAsync() {
        const obj = new CocoSSD(__dirname+'/../../public/images/pastoraleman.jpg', 'DOG', 0.5);
        const result = await obj.getJSON();
        console.log(result);
    }
    callAsync();



    if (algorithm=="CocoSSD")
    {
        const learning = new analizeCocoSSD(imagePaths,unzipOutput,zipPath,searchWord,percentage,secondsToString,algorithm)
        let response = await learning.recognition();
        
        console.info(response);
        res.send( response );
    }

    if (algorithm=="MobilNet")
    {
        const learning = new analizeMobilNet(imagePaths,unzipOutput,zipPath,searchWord,percentage,secondsToString,req.body.algorithm)
        let response = await learning.recognition();
        
        console.info(response);
        res.send( response );
    }

});


module.exports = router;

const express = require("express");
const upload = require("../middleware/imageFilter");
const MachileLearning = require("../controllers/MachineLearing");
const router = express.Router();

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

router.post("/", upload.single('imageFile'), async (req, res)=> {
        /*
        if (err) {
            res.status(400).send("Something went wrong!" + err);
            return;
        }
        if (!req.file || Object.keys(req.file).length === 0) {
            res.status(400).send("No files were uploaded.");
            return;
        }
        */

        const searchWord = req.body.searchWord;
        const percentage = req.body.percentage;
        const imageNameFile = req.file.filename;
        const pathFile = req.file.path;
        const destinationFile = req.file.destination;

        console.log(pathFile);

        //const obj = new MachineLearing(__dirname+'/../../public/images/1626305450874.jpg', 'dog', 0.5);

        const machileLearning = new MachileLearning(pathFile, searchWord,percentage);
        const result = await machileLearning.getJSON();

        /*
        const response = {
            algorithm: "CocoSSD",
            searchWord: searchWord,
            quantity: "2",
            image: "http://localhost:8080/images/" + imageNameFile,
            percentage: "80%",
        };
        */

        res.send(result);
});

module.exports = router;

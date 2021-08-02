require("dotenv").config("../../.env");
const uploadFile = require("../middleware/upload");
const fs = require("fs");
const MasterVideoConverter = require("../model/converter/video/masterVideoConverter");
const Compiler = require("../model/converter/compiler");
const Url = require('../database/url_model');
const Zip = require("../middleware/zipping");
const baseUrl = process.env.BASE_URL;

const upload = async (req, res) => {
    try {
        await uploadFile(req, res);

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }
        const dir = '"' + req.file.path + '"';

        const video = new MasterVideoConverter(dir);
        const zipping = new Zip();

        const compiler = new Compiler();
        const command = video.changeVideoFormat(
            undefined,
            undefined,
            undefined,
            ".mov"
        );

        const result = await compiler.execute(command);

        res.status(200).send({
            name: req.file.originalname,
            url: baseUrl + req.file.originalname,
            params: req.body
        });

        const url = new Url({name: req.file.originalname, url: baseUrl+req.file.originalname});
        url.save(function(err, doc) {
        if (err) return console.error(err);
            console.log("Document inserted successfully!");
        });

        zipping.zipDownload(req, res);

    } catch (err) {
        console.log(err);

        if (err.code == "LIMIT_FILE_SIZE") {
            return res.status(500).send({
                message: "File size cannot be larger than 2MB!"
            });
        }

        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`
        });
    }
};

const getListFiles = (req, res) => {
    const directoryPath = process.env.ZIP_PATH;

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.status(500).send({
                message: "Unable to scan files!"
            });
        }

        let fileInfos = [];

        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: baseUrl + file
            });
        });

        res.status(200).send(fileInfos);
    });
};

const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = process.env.ZIP_PATH;

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err
            });
        }
    });
};

module.exports = {
    upload,
    download,
    getListFiles
};

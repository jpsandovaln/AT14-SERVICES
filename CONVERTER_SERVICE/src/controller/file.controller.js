const uploadFile = require("../middleware/upload");
const fs = require("fs");
const baseUrl = "http://localhost:8080/files/";
require("dotenv").config({ path: "../.env" });
const helpPath = require("../.././helpPaths");

const admz = require("adm-zip");

const BuildCmdObtainFrames = require("../model/converter/video/buildCmdObtainFrames");
const Compiler = require("../model/converter/compiler");

const path = require("path");
//const salida= require('../output/')

//const output= path.resolve(__dirname,'output' );
const upload = async (req, res) => {
    try {
        await uploadFile(req, res);

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }
        const dir = '"' + req.file.path + '"';
        console.info(dir);

        const video = new BuildCmdObtainFrames();
        const compiler = new Compiler();
        const command = video.returnCommand(
            helpPath.principalPath + "/" + "thirdParty" + "/" + "ffmpeg.exe",
            dir,
            helpPath.principalPath +
                "/" +
                "resources" +
                "/" +
                "outputPath" +
                "/",
            "1",
            ".jpg"
        );
        console.info(command);
        const result = await compiler.execute(command);
        //console.info(result);
        //res.send(result);

        //console.log(command);
        res.status(200).send({
            name: req.file.originalname,
            url: baseUrl + req.file.originalname,
            params: req.body
        });
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
    const directoryPath = __basedir + "/resources/upload/";

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
    const directoryPath = __basedir + "/resources/upload/";

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err
            });
        }
    });
};

const to_zip = fs.readdirSync(
    helpPath.principalPath + "/" + "resources" + "/" + "outputPath"
);
const zipDownload = (req, res) => {
    const zip = new admz();
    for (var k = 0; k < to_zip.length; k++) {
        zip.addLocalFile(
            helpPath.principalPath +
                "/" +
                "resources" +
                "/" +
                "outputPath" +
                "/" +
                to_zip[k]
        );
    }
    const downloadName = `${Date.now()}.zip`;
    const data = zip.toBuffer();

    zip.writeZip(
        helpPath.principalPath +
            "/" +
            "resources" +
            "/" +
            "zip" +
            "/" +
            downloadName +
            "/"
    );

    res.set("Content-Type", "application/octet-stream");
    res.set("Content-Disposition", `attachment; filename=${downloadName}`);
    res.set("Content-Length", data.length);
    res.send(data);
};

module.exports = {
    upload,
    getListFiles,
    download,
    zipDownload
};
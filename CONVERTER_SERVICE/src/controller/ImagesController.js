const baseUrl = "http://localhost:4000/";
const fs = require("fs");
const uploadImagesMiddleware = require("../middleware/uploadFiles");
const BuildCmdChangeImageFormat = require("../model/converter/images/buildCmdChangeImageFormat");
const BuildCmdChangeImageDirection = require("../model/converter/images/buildCmdChangeImageDirection");
const BuildCmdChangeImageDoubling = require("../model/converter/images/buildCmdChangeImageDoubling");
const BuildCmdChangeImagePaint = require("../model/converter/images/buildCmdChangeImagePaint");
const BuildCmdChangeImageColorMonochrome = require("../model/converter/images/buildCmdChangeImageMonochrome");
const BuildCmdChangeImageQuality = require("../model/converter/images/buildCmdChangeImageQuality");
const BuildCmdChangeImageResize = require("../model/converter/images/buildCmdChangeImageResize");
const BuildCmdImageChangeToGrayscale = require('../model/converter/images/buildCmdImageChangeToGrayscale');

const Compiler = require("../models/converter/compiler");
const path = require("path");

const endPointToChangeImageFormat = async (req, res) => {
    await uploadImagesMiddleware(req, res);
    const ImageNameFile = req.file.filename;
    const prove = __dirname + "/../middleware/resource/" + ImageNameFile;
    const executablePathMagick = __dirname + "/../../thirdParty/magick.exe";
    const outputPath = __dirname + "/../middleware/imagesProcessor/";
    const outputFormat = req.body.outputFormat;

    const imageFormat = new BuildCmdChangeImageFormat();
    const compiler = new Compiler();
    compiler.execute(
        imageFormat.returnCommandToConverterImages(
            executablePathMagick,
            prove,
            outputPath,
            outputFormat
        )
    );
    const downloadPath =
        outputPath + path.parse(ImageNameFile).name + outputFormat;
    res.send({ message: downloadPath });
};

const endPointToChangeImageDirection = async (req, res) => {
    await uploadImagesMiddleware(req, res);
    const ImageNameFile = req.file.filename;
    const imagePath = __dirname + "/../middleware/resource/" + ImageNameFile;
    const executablePathConverter = __dirname + "/../../thirdParty/convert.exe";
    const outputPath = __dirname + "/../middleware/imagesProcessor/";
    const outputFormat = req.body.outputFormat;
    const rotateImage = req.body.rotateImage;

    const imageFormat = new BuildCmdChangeImageDirection();
    const compiler = new Compiler();
    compiler.execute(
        imageFormat.returnCommandToRotateImages(
            executablePathConverter,
            imagePath,
            outputPath,
            rotateImage,
            outputFormat
        )
    );
    const downloadPath =
        outputPath + path.parse(ImageNameFile).name + outputFormat;
    res.send({ message: downloadPath });
};

const endPointToChangeImageDoubling = async (req, res) => {
    await uploadImagesMiddleware(req, res);
    const ImageNameFile = req.file.filename;
    const imagePath = __dirname + "/../middleware/resource/" + ImageNameFile;
    const executablePathConverter = __dirname + "/../../thirdParty/convert.exe";
    const outputPath = __dirname + "/../middleware/imagesProcessor/";
    const outputFormat = req.body.outputFormat;
    const doublingImage = req.body.doublingImage;

    const imageFormat = new BuildCmdChangeImageDoubling();
    const compiler = new Compiler();
    compiler.execute(
        imageFormat.returnCommandToChangeImageDoubling(
            executablePathConverter,
            imagePath,
            doublingImage,
            outputPath,
            outputFormat
        )
    );
    const downloadPath =
        outputPath + path.parse(ImageNameFile).name + outputFormat;
    res.send({ message: downloadPath });
};

const endPointToChangeImageMonochrome = async (req, res) => {
    await uploadImagesMiddleware(req, res);
    const ImageNameFile = req.file.filename;
    const imagePath = __dirname + "/../middleware/resource/" + ImageNameFile;
    const executablePathConverter = __dirname + "/../../thirdParty/convert.exe";
    const outputPath = __dirname + "/../middleware/imagesProcessor/";
    const outputFormat = req.body.outputFormat;

    const imageFormat = new BuildCmdChangeImageColorMonochrome();
    const compiler = new Compiler();
    compiler.execute(
        imageFormat.returnCommandToChangeImageColorMonochrome(
            executablePathConverter,
            imagePath,
            outputPath,
            outputFormat
        )
    );
    const downloadPath =
        outputPath + path.parse(ImageNameFile).name + outputFormat;
    res.send({ message: downloadPath });
};

const endPointToChangeImagePaint = async (req, res) => {
    await uploadImagesMiddleware(req, res);
    const ImageNameFile = req.file.filename;
    const imagePath = __dirname + "/../middleware/resource/" + ImageNameFile;
    const executablePathConverter = __dirname + "/../../thirdParty/convert.exe";
    const outputPath = __dirname + "/../middleware/imagesProcessor/";
    const outputFormat = req.body.outputFormat;
    const imagePaint = req.body.imagePaint;

    const imageFormat = new BuildCmdChangeImagePaint();
    const compiler = new Compiler();
    compiler.execute(
        imageFormat.returnCommandToChangeImagePaint(
            executablePathConverter,
            imagePath,
            imagePaint,
            outputPath,
            outputFormat
        )
    );
    const downloadPath =
        outputPath + path.parse(ImageNameFile).name + outputFormat;
    res.send({ message: downloadPath });
};

const endPointToChangeImageQuality = async (req, res) => {
    await uploadImagesMiddleware(req, res);
    const ImageNameFile = req.file.filename;
    const imagePath = __dirname + "/../middleware/resource/" + ImageNameFile;
    const executablePathConverter = __dirname + "/../../thirdParty/convert.exe";
    const outputPath = __dirname + "/../middleware/imagesProcessor/";
    const outputFormat = req.body.outputFormat;
    const imageQuality = req.body.imageQuality;

    const imageFormat = new BuildCmdChangeImageQuality();
    const compiler = new Compiler();
    compiler.execute(
        imageFormat.returnCommandToChangesQualityImages(
            executablePathConverter,
            imagePath,
            outputPath,
            imageQuality,
            outputFormat
        )
    );
    const downloadPath =
        outputPath + path.parse(ImageNameFile).name + outputFormat;
    res.send({ message: downloadPath });
};

const endPointToChangeImageResize = async (req, res) => {
    await uploadImagesMiddleware(req, res);
    const ImageNameFile = req.file.filename;
    const imagePath = __dirname + "/../middleware/resource/" + ImageNameFile;
    const executablePathConverter = __dirname + "/../../thirdParty/convert.exe";
    const outputPath = __dirname + "/../middleware/imagesProcessor/";
    const outputFormat = req.body.outputFormat;
    const imageResize = req.body.imageResize;

    const imageFormat = new BuildCmdChangeImageResize();
    const compiler = new Compiler();
    compiler.execute(
        imageFormat.returnCommandToResizeImages(
            executablePathConverter,
            imagePath,
            outputPath,
            imageResize,
            outputFormat
        )
    );
    const downloadPath =
        outputPath + path.parse(ImageNameFile).name + outputFormat;
    res.send({ message: downloadPath });
};

const endPointToChangeImageToGrayscale = async (req, res) => {
    await uploadImagesMiddleware(req, res);
    const ImageNameFile = req.file.filename;
    const imagePath = __dirname + "/../middleware/resource/" + ImageNameFile;
    const executablePathConverter = __dirname + "/../../thirdParty/convert.exe";
    const outputPath = __dirname + "/../middleware/imagesProcessor/";
    const outputFormat = req.body.outputFormat;

    const imageFormat = new BuildCmdImageChangeToGrayscale();
    const compiler = new Compiler();
    compiler.execute(
        imageFormat.returnCommandToChangeImageToGrayscale(
            executablePathConverter,
            imagePath,
            outputPath,
            outputFormat
        )
    );
    const downloadPath =
        outputPath + path.parse(ImageNameFile).name + outputFormat;
    res.send({ message: downloadPath });
};

module.exports = {
    endPointToChangeImageFormat,
    endPointToChangeImageDirection,
    endPointToChangeImageDoubling,
    endPointToChangeImageMonochrome,
    endPointToChangeImagePaint,
    endPointToChangeImageQuality,
    endPointToChangeImageResize,
    endPointToChangeImageToGrayscale
};

const express = require("express");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const {
    changeVideoFormat,
    download,
} = require("../CONVERTER_SERVICE/src/controller/VideoController");
const uploadFilesMiddleware = require("../CONVERTER_SERVICE/src/middleware/uploadFiles");

const PORT = process.env.PORT || 4000;

const app = express();
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Video Converter",
            version: "1.0.0",
            description: "Api to convert videos into imagenes",
            contact: {
                name: "AT14",
                url: "http://localhost:8080/videoConverter",
            },
        },
        servers: [
            {
                url: "http://localhost:8080",
            },
        ],
    },
    apis: ["index.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(cors());

app.use(express.json());

/**
 * @swagger
 * definitions:
 *  Video:
 *   type: object
 *   properties:
 *    file:
 *     type: string
 *     description: The video file that will be converted
 *     format: binary
 *    ratio:
 *     type: string
 *     description: ask
 *     example: '20'
 *    scale:
 *     type: string
 *     description: ask
 *     example: '340x300'
 *    quality:
 *     type: string
 *     description: Output quality of the video
 *     example: '15'
 *    angle:
 *     type: string
 *     description: Output angle of the video
 *     example: '270'
 *    vflip:
 *     type: string
 *     description: ask
 *     example: 'true'
 *    hflip:
 *     type: string
 *     description: ask
 *     example: 'false'
 *    outputFormat:
 *     type: string
 *     description: Output format of the video
 *     example: '.flv'
 *    obtainFrames:
 *     type: string
 *     description: ask
 *     example: 'false'
 *    frameScale:
 *     type: string
 *     description: ask
 *     example: '400'
 *    grayScale:
 *     type: string
 *     description: Variable to check if the output frames will be in gray scale
 *     example: 'false'
 *    timeBetweenFrames:
 *     type: string
 *     description: The time between capturing the video frames
 *     example: '1'
 *    outputFormatFrames:
 *     type: string
 *     description: Output format of the images from the video
 *     example: '.png'
 *    obtainAudio:
 *     type: string
 *     description: Variable to confirm if the converter will extract the audio from the video
 *     example: 'true'
 *    checksum:
 *     type: string
 *     description: The hash to check if the video is not loaded more than once
 *     example: 'add4960460e79d9b8c5ddb98c1241398'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Video Converter:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *        file:
 *         type: string
 *         format: binary
 *         description: ask
 *         example: "video.mp4"
 *        ratio:
 *         type: string
 *         description: ask
 *         example: '20'
 *        scale:
 *         type: string
 *         description: ask
 *         example: '340x300'
 *        quality:
 *         type: string
 *         description: Output quality of the video
 *         example: '15'
 *        angle:
 *         type: string
 *         description: Output angle of the video
 *         example: '270'
 *        vflip:
 *         type: string
 *         description: ask
 *         example: 'true'
 *        hflip:
 *         type: string
 *         description: ask
 *         example: 'false'
 *        outputFormat:
 *         type: string
 *         description: Output format of the video
 *         example: '.flv'
 *        obtainFrames:
 *         type: string
 *         description: ask
 *         example: 'false'
 *        frameScale:
 *         type: string
 *         description: ask
 *         example: '400'
 *        grayScale:
 *         type: string
 *         description: Variable to check if the output frames will be in gray scale
 *         example: 'false'
 *        timeBetweenFrames:
 *         type: string
 *         description: The time between capturing the video frames
 *         example: '1'
 *        outputFormatFrames:
 *         type: string
 *         description: Output format of the images from the video
 *         example: '.png'
 *        obtainAudio:
 *         type: string
 *         description: Variable to confirm if the converter will extract the audio from the video
 *         example: 'true'
 *        checksum:
 *         type: string
 *         description: The hash to check if the video is not loaded more than once
 *         example: 'add4960460e79d9b8c5ddb98c1241398'
 */

/**
 * @swagger
 * tags:
 *  name: Video Converter
 *  description: The books managing API
 */

/**
 * @swagger
 * /videoConverter:
 *  post:
 *   tags: [Video Converter]
 *   summary: Convert video into images
 *   description: this api convert video into images or into different format of video
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/Video'
 *   responses:
 *    200:
 *     description: video converted succesfully
 *    404:
 *     description: non conection available
 *    500:
 *     description: failure in converting video
 */
app.post("/videoConverter",cors(), [uploadFilesMiddleware], changeVideoFormat);

app.listen(PORT, () =>
    console.log(
        "The server is running on http://localhost:" + PORT + "/api-docs"
    )
);

const {
    changeVideoFormat,
    download,
} = require("../../../CONVERTER_SERVICE/src/controller/VideoController");
const uploadFilesMiddleware = require("../../../CONVERTER_SERVICE/src/middleware/uploadFiles");
const {
    framesZipML,
    downloadMLZip,
} = require("../../../CONVERTER_SERVICE/src/controller/MLController");
const {
    obtainMetadata,
    downloadMetadata,
} = require("../../../CONVERTER_SERVICE/src/controller/metadataController");

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
 *     description: Ratio that will be obtained from the video converted
 *     example: '20'
 *    scale:
 *     type: string
 *     description: Size of the video that converted
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
 *     description: The video converted will flip vertically
 *     example: 'true'
 *    hflip:
 *     type: string
 *     description: The video converter will flip vertically
 *     example: 'false'
 *    outputFormat:
 *     type: string
 *     description: Output format of the video
 *     example: '.flv'
 *    obtainFrames:
 *     type: string
 *     description: Option to agree if the converter will obtain the frames from the video
 *     example: 'false'
 *    frameScale:
 *     type: string
 *     description: Size of the frames that will be obtained from the video
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
 *  VideoToMachineLearning:
 *   type: object
 *   properties:
 *    file:
 *     type: string
 *     description: The video file that will be converted into images
 *     format: binary
 *    obtainFrames:
 *     type: string
 *     description: Option to determine if the video frames will be obtained
 *     example: 'true'
 *    frameScale:
 *     type: string
 *     description: The size of the frames that will be obtained
 *     example: '400'
 *    grayScale:
 *     type: string
 *     description: Option to determinate if the images obtained will be in gray scale
 *     example: 'true'
 *  FilesMetadata:
 *   type: object
 *   properties:
 *    file:
 *     type: string
 *     description: The video file that will be sent
 *     format: binary
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
 *        ratio:
 *         type: string
 *         description: ask
 *        scale:
 *         type: string
 *         description: ask
 *        quality:
 *         type: string
 *         description: Output quality of the video
 *        angle:
 *         type: string
 *         description: Output angle of the video
 *        vflip:
 *         type: string
 *         description: ask
 *        hflip:
 *         type: string
 *         description: ask
 *        outputFormat:
 *         type: string
 *         description: Output format of the video
 *        obtainFrames:
 *         type: string
 *         description: ask
 *        frameScale:
 *         type: string
 *         description: ask
 *        grayScale:
 *         type: string
 *         description: Variable to check if the output frames will be in gray scale
 *        timeBetweenFrames:
 *         type: string
 *         description: The time between capturing the video frames
 *        outputFormatFrames:
 *         type: string
 *         description: Output format of the images from the video
 *        obtainAudio:
 *         type: string
 *         description: Variable to confirm if the converter will extract the audio from the video
 *        checksum:
 *         type: string
 *         description: The hash to check if the video is not loaded more than once
 *     VideoToMachineLearning:
 *      type: object
 *      properties:
 *       file:
 *        type: string
 *        description: The video file that will be converted into images
 *        format: binary
 *       obtainFrames:
 *        type: string
 *        description: Option to determine if the video frames will be obtained
 *       frameScale:
 *        type: string
 *        description: The size of the frames that will be obtained
 *       grayScale:
 *        type: string
 *        description: Option to determinate if the images obtained will be in gray scale
 *     FilesMetadata:
 *      type: object
 *      properties:
 *       file:
 *        type: string
 *        description: The video file that will be sent
 *        format: binary
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
app.post("/videoConverter", cors(), [uploadFilesMiddleware], changeVideoFormat);

/**
 * @swagger
 * /files/{name}:
 *  get:
 *   tags: [Video Converter]
 *   summary: Endpoint used to download the data information done by "videoConverter" endpoint
 *   parameters:
 *     - in: path
 *       name: name
 *       schema:
 *         type: string
 *       required: true
 *       description: Name of the file converted from the "videoConverter" that will be downloaded
 *   responses:
 *    200:
 *     description: Video converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in converting video
 */
app.get("/files/:name", download);

/**
 * @swagger
 * /frames:
 *  post:
 *   tags: [Video Converter]
 *   summary: Convert video into images to work with machine learning
 *   description: Convert video into images to work with machine learning
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/VideoToMachineLearning'
 *   responses:
 *    200:
 *     description: video converted succesfully
 *    404:
 *     description: non conection available
 *    500:
 *     description: failure in converting video
 */
app.post("/frames", framesZipML);

/**
 * @swagger
 * /framesZipML/{name}:
 *  get:
 *   tags: [Video Converter]
 *   summary: Endpoint used to download the data information done by "frames" endpoint
 *   parameters:
 *     - in: path
 *       name: name
 *       schema:
 *         type: string
 *       required: true
 *       description: Name of the file that will be downloaded
 *   responses:
 *    200:
 *     description: Video converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in converting video
 */
app.get("/framesZipML/:name", downloadMLZip);

/**
 * @swagger
 * /filesMetadata:
 *  post:
 *   tags: [Video Converter]
 *   summary: File that will be sent to extract it's metadata
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/FilesMetadata'
 *   responses:
 *    200:
 *     description: video converted succesfully
 *    404:
 *     description: non conection available
 *    500:
 *     description: failure in converting video
 */
app.post("/filesMetadata", obtainMetadata);

/**
 * @swagger
 * /filesMetadata/{name}:
 *  get:
 *   tags: [Video Converter]
 *   summary: Endpoint used to download the data information done by "filesMetadata"
 *   parameters:
 *     - in: path
 *       name: name
 *       schema:
 *         type: string
 *       required: true
 *       description: Name of the file that will be downloaded
 *   responses:
 *    200:
 *     description: Video converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in converting video
 */

app.get("/filesMetadata/:name", downloadMetadata);

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
 *     description: Rotate the video
 *     example: '270'
 *    vflip:
 *     type: string
 *     description: Mirror effect vertically
 *     example: 'true'
 *    hflip:
 *     type: string
 *     description: Mirror effect horizontally
 *     example: 'true'
 *    outputFormat:
 *     type: string
 *     description: Output format of the video
 *     example: '.flv'
 *    obtainFrames:
 *     type: string
 *     description: Option to agree if the converter will obtain the frames from the video
 *     example: 'true'
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
 *     description: Option to agree if the converter will obtain the audio from the video
 *     example: 'true'
 *    audioFormat:
 *     type: string
 *     description: Output audio format
 *     example: '.mp3'
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
 *     description: Option to agree if the converter will obtain the frames from the video
 *     example: 'true'
 *    frameScale:
 *     type: string
 *     description: Size of the frames that will be obtained from the video
 *     example: '400'
 *    grayScale:
 *     type: string
 *     description: Variable to check if the output frames will be in gray scale
 *     example: 'true'
 *  FilesMetadata:
 *   type: object
 *   properties:
 *    file:
 *     type: string
 *     description: The video file that will be analized
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
 *         description: Upload the video file that will be converted to different formats
 *        ratio:
 *         type: string
 *         description: Provides the number of a video's frames per second. It could be values from 1 to 24
 *        scale:
 *         type: string
 *         description: Provides the video's dimensions. It could be 1280x720, 854x480, 640x360, 426x240x 256x144
 *        quality:
 *         type: string
 *         description: Output quality of the video. It could be from 1 to 31
 *        angle:
 *         type: string
 *         description: Rotate the image depending on the values 90, 180, 270 degrees
 *        vflip:
 *         type: string
 *         description: Mirror effect vertically. Specify values true or false
 *        hflip:
 *         type: string
 *         description: Mirror effect horizontally. Specify values true or false
 *        outputFormat:
 *         type: string
 *         description: Output format of the video. It could be .mp4, .mov, .wmv, .avi, .flv, .mkv, .webm
 *        obtainFrames:
 *         type: string
 *         description: If it's true the program will return frames from the video, if it's false it won't
 *        frameScale:
 *         type: string
 *         description: The size of the frame returned by the video. It could be values 854, 640, 520, 426, 360, 256
 *        grayScale:
 *         type: string
 *         description: Variable to check if the output frames will be in gray scale. It could be true or false
 *        timeBetweenFrames:
 *         type: string
 *         description: The time between capturing the video frames. By default it is one frame per second
 *        outputFormatFrames:
 *         type: string
 *         description: Output format of the images from the video. It could be png, jpg, jpeg
 *        obtainAudio:
 *         type: string
 *         description: If it's true the program will return audio from the video. It could be .mp3, .mp2, .wma
 *        audioFormat:
 *         type: string
 *         description: Ouput format of the audio. It could be .mp3, .mp2, .wma
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
 *        description: If it's true the program will return frames from the video, if it's false it won'td
 *       frameScale:
 *        type: string
 *        description: The size of the frame returned by the video. It could be values 854, 640, 520, 426, 360, 256
 *       grayScale:
 *        type: string
 *        description: Variable to check if the output frames will be in gray scale. It could be true or false
 *     FilesMetadata:
 *      type: object
 *      properties:
 *       file:
 *        type: string
 *        description: The video file that will be analized
 *        format: binary
 */

/**
 * @swagger
 * tags:
 *  name: Video Converter
 *  description: To convert a video to different formats
 */

/**
 * @swagger
 * /videoConverter:
 *  post:
 *   tags: [Video Converter]
 *   summary: Convert video to images
 *   description: This endpoint converts a video to images and to different video formats
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/Video'
 *   responses:
 *    200:
 *     description: Video converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
app.post("/videoConverter", cors());

/**
 * @swagger
 * /files/{name}:
 *  get:
 *   tags: [Video Converter]
 *   summary: Download the video file converted
 *   description: This endpoint download the video file done in "videoConverter" endpoint
 *   parameters:
 *     - in: path
 *       name: name
 *       schema:
 *         type: string
 *       required: true
 *       description: Name of the file that will be downloaded
 *   responses:
 *    200:
 *     description: Video download succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
app.get("/files/:name");

/**
 * @swagger
 * /frames:
 *  post:
 *   tags: [Video Converter]
 *   summary: Convert video to images to work with machine learning
 *   description: This endpoint converts a video to images to work with machine learning
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/VideoToMachineLearning'
 *   responses:
 *    200:
 *     description: Video converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
app.post("/frames");

/**
 * @swagger
 * /framesZipML/{name}:
 *  get:
 *   tags: [Video Converter]
 *   summary: Download video frames
 *   description: This endpoint download the video frames done in "frames" endpoint
 *   parameters:
 *     - in: path
 *       name: name
 *       schema:
 *         type: string
 *       required: true
 *       description: Name of the file that will be downloaded
 *   responses:
 *    200:
 *     description: Frames download succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
app.get("/framesZipML/:name");

/**
 * @swagger
 * /filesMetadata:
 *  post:
 *   tags: [Video Converter]
 *   summary: File that will be sent to extract it's metadata
 *   description: This endpoint extracts metadata from a file
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/FilesMetadata'
 *   responses:
 *    200:
 *     description: Metadata extracted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
app.post("/filesMetadata");

/**
 * @swagger
 * /filesMetadata/{name}:
 *  get:
 *   tags: [Video Converter]
 *   summary: Download the metadata information
 *   description: This endpoint download the data information done in "filesMetadata" endpoint
 *   parameters:
 *     - in: path
 *       name: name
 *       schema:
 *         type: string
 *       required: true
 *       description: Name of the file that will be downloaded
 *   responses:
 *    200:
 *     description: Video downloaded succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */

app.get("/filesMetadata/:name");

/**
 * @swagger
 * definitions:
 *  Audio:
 *   type: object
 *   properties:
 *    file:
 *     type: string
 *     description: The audio file that will be converted
 *     format: binary
 *    outputFormat:
 *     type: string
 *     description: The audio format that will be obtained from the audio converter
 *     example: '.wav'
 *    FadeIn:
 *     type: string
 *     description: Fade in audio
 *     example: 'true'
 *    FadeOut:
 *     type: string
 *     description: Fade out audio
 *     example: 'false'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Audio Converter:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *        file:
 *         type: string
 *         format: binary
 *         description: The audio file that will be converted to a different formats
 *        outputFormat:
 *         type: string
 *         description: The format type that the file will be converted. It could be .mp3, .mp2, .mp4, .wav
 *        FadeIn:
 *         type: string
 *         description: Output fade in audio. It could be true or false
 *        FadeOut:
 *         type: string
 *         description: Output fade out audio. It could be true or false
 */

/**
 * @swagger
 * tags:
 *  name: Audio Converter
 *  description: To convert an Audio to different formats
 */

/**
 * @swagger
 * /audioConverter:
 *  post:
 *   tags: [Audio Converter]
 *   summary: Convert audio 
 *   description: This API converts audio into different formats
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/Audio'
 *   responses:
 *    200:
 *     description: Audio converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
 app.post("/audioConverter", cors());

 /**
 * @swagger
 * /audio/{name}:
 *  get:
 *   tags: [Audio Converter]
 *   summary: Download the audio file converted
 *   description: This endpoint is used to download the data information done by "audio" endpoint
 *   parameters:
 *     - in: path
 *       name: name
 *       schema:
 *         type: string
 *       required: true
 *       description: Name of the file that will be downloaded
 *   responses:
 *    200:
 *     description: Audio converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
app.get("/audio/:name");

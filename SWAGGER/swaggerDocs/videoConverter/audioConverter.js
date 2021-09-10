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
 *    audioFormat:
 *     type: string
 *     description: The audio format that will be obtained from the audio converter
 *     example: '.mp4'
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
 *        audioFormat:
 *         type: string
 *         description: The format type that the file will be converted
 *        FadeIn:
 *         type: string
 *         description: Output fade in audio
 *        FadeOut:
 *         type: string
 *         description: Output fade out audio
 */

/**
 * @swagger
 * tags:
 *  name: Audio Converter
 *  description: To convert an Audio to different formats
 */

/**
 * @swagger
 * /AudioConverter:
 *  post:
 *   tags: [Audio Converter]
 *   summary: Convert audio 
 *   description: This API convert audio into different formats
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
 *     description: Failure in converting Audio
 */
 app.post("/AudioConverter", cors());

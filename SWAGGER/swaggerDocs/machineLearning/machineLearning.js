const cors = require("cors");

/**
 * @swagger
 * definitions:
 *  ZipAnalizer:
 *   type: object
 *   properties:
 *    zipFile:
 *     type: string
 *     description: The video file that will be converted
 *     format: binary
 *    searchWord:
 *     type: string
 *     description: The keyword that will be looked in the images by the machine learning
 *     example: 'dog'
 *    percentage:
 *     type: string
 *     description: ask
 *     example: '0.2'
 *    algorithm:
 *     type: string
 *     description: The algorithm that will be used to search in the images
 *     example: 'CocoSSD'
 *  ImagesAnalizer:
 *   type: object
 *   properties:
 *    file:
 *     type: array
 *     items:
 *      type: string
 *      format: binary
 *     description: The video file that will be converted
 *    searchWord:
 *     type: string
 *     description: The keyword that will be looked in the images by the machine learning
 *     example: 'dog'
 *    percentage:
 *     type: string
 *     description: ask
 *     example: '0.2'
 *    algorithm:
 *     type: string
 *     description: The algorithm that will be used to search in the images
 *     example: 'CocoSSD'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Machine Learning:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *        zipFile:
 *         type: string
 *         format: binary
 *         description: ask
 *        searchWord:
 *         type: string
 *         description: The proportions of a video's frame between width and height
 *        percentage:
 *         type: string
 *         description: The proportions between the dimensions
 *        algorithm:
 *         type: string
 *         description: Output quality of the video
 *     ImagesAnalizer:
 *      type: object
 *      properties:
 *       file:
 *        type: array
 *        description: The video file that will be converted into images
 *        format: binary
 *       searchWord:
 *        type: string
 *        description: Option to determine if the video frames will be obtained
 *       percentage:
 *        type: string
 *        description: The size of the frames that will be obtained
 *       algorithm:
 *        type: string
 *        description: Option to determinate if the images obtained will be in gray scale
 */

/**
 * @swagger
 * tags:
 *  name: Machine Learning
 *  description: The books managing API
 */

/**
 * @swagger
 * /analizeZip:
 *  post:
 *   tags: [Machine Learning]
 *   summary: Analize images that are into a zip
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/ZipAnalizer'
 *   responses:
 *    200:
 *     description: video converted succesfully
 *    404:
 *     description: non conection available
 *    500:
 *     description: failure in converting video
 */
app.post("/analizeZip", cors());

/**
 * @swagger
 * /analizeImages:
 *  post:
 *   tags: [Machine Learning]
 *   summary: Analize many images
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/ImagesAnalizer'
 *   responses:
 *    200:
 *     description: video converted succesfully
 *    404:
 *     description: non conection available
 *    500:
 *     description: failure in converting video
 */
app.post("/analizeImages");

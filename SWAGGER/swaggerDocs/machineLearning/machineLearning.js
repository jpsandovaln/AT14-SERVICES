const cors = require("cors");
const analizeZip = require("../../../MLendPoint/dist/routes/analizeZip");
const analizeImages = require("../../../MLendPoint/dist/routes/analizeImages");

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
app.post("/analizeZip",cors() ,analizeZip);

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
app.post("/analizeImages", analizeImages);

const cors = require("cors");

/**
 * @swagger
 * definitions:
 *  ZipAnalizer:
 *   type: object
 *   properties:
 *    zipFile:
 *     type: string
 *     description: The zip file that will be analized
 *     format: binary
 *    searchWord:
 *     type: string
 *     description: The keyword that will be searched in the images by the machine learning
 *     example: 'dog'
 *    percentage:
 *     type: string
 *     description: Success rate to identify the object precision
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
 *     description: The zip file that will be analized
 *    searchWord:
 *     type: string
 *     description: The keyword that will be searched in the images by the machine learning
 *     example: 'dog'
 *    percentage:
 *     type: string
 *     description: Success rate to identify the object precision
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
 *         type: file
 *         format: binary
 *         description: The zip file that will be analized, this zip file contains different images
 *        searchWord:
 *         type: string
 *         description: The keyword that will be searched in the images by the machine learning
 *        percentage:
 *         type: string
 *         description: Success rate to identify the object precision
 *        algorithm:
 *         type: string
 *         description: The algorithm that will be used to search in the images. It could be CocoSSD and MobilNet
 */

/**
 * @swagger
 * tags:
 *  name: Machine Learning
 *  description: Analize images to detect objects
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
 *     description: Zip file analized succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
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
 *     description: Images analized succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
app.post("/analizeImages");

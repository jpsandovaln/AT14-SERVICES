const cors = require("cors");

/**
 * @swagger
 * definitions:
 *  FileAnalizer:
 *   type: object
 *   properties:
 *    file:
 *     type: file
 *     description: The image file that will be converted to text
 *     format: binary
 *    language:
 *     type: string
 *     description: The keyword that will be converted to text
 *     example: 'eng'
 *  FileAnalizerRectangle:
 *   type: object
 *   properties:
 *    file:
 *     type: file
 *     description: The image file that will be converted to text
 *     format: binary
 *    language:
 *     type: string
 *     description: The keyword that will be converted to text
 *     example: 'eng'
 *    left:
 *     type: number
 *     description: Space to left side in the image
 *     example: 1
 *    top:
 *     type: number
 *     description: Space to top side in the image
 *     example: 1
 *    width:
 *     type: number
 *     description: Width the image will be convert to text
 *     example: 50
 *    height:
 *     type: number
 *     description: Height the image will be convert to text
 *     example: 50
 */

/**
 * @swagger
 * tags:
 *  name: Extractor Service
 *  description: To convert image to text
 */

/**
 * @swagger
 * /upload:
 *  post:
 *   tags: [Extractor Service]
 *   summary: Analyze an image to convert to text
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/FileAnalizer'
 *   responses:
 *    200:
 *     description: Image converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
app.post("/upload", cors());

/**
 * @swagger
 * /extractToPDF:
 *  post:
 *   tags: [Extractor Service]
 *   summary: Analyze an image to convert to text into PDF file
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/FileAnalizer'
 *   responses:
 *    200:
 *     description: Image converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
app.post("/extractToPDF");

/**
 * @swagger
 * /extractCroppedImage:
 *  post:
 *   tags: [Extractor Service]
 *   summary: Analyze an image to convert to text 
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/FileAnalizerRectangle'
 *   responses:
 *    200:
 *     description: Image converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
 app.post("/extractCroppedImage");

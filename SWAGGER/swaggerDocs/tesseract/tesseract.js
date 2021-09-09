const cors = require("cors");

/**
 * @swagger
 * definitions:
 *  ZipAnalizer:
 *   type: object
 *   properties:
 *    file:
 *     type: string
 *     description: The image file that will be covert to text
 *     format: binary
 *    language:
 *     type: string
 *     description: Language Code that will be covert to text  
 *     example: 'eng'
 *  ZipAnalizerUpload:
 *   type: object
 *   properties:
 *    file:
 *     type: file
 *     description: The image file that will be covert to text
 *     format: binary
 *    language:
 *     type: string
 *     description: Language Code that will be covert to text  
 *     example: 'eng'
 */

/**
 * @swagger
 * tags:
 *  name: Extractor Service
 *  description: The books managing API.
 */

/**
 * @swagger
 * /upload:
 *  post:
 *   tags: [Extractor Service]
 *   summary: Analize a image to convert to text
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/ZipAnalizer'
 *   responses:
 *    200:
 *     description: Image converted succesfully
 *    404:
 *     description: No connection available or File not found
 *    500:
 *     description: Failure into the server
 */
app.post("/upload",cors());

/**
 * @swagger
 * /extractToPDF:
 *  post:
 *   tags: [Extractor Service PDF]
 *   summary: Analize a image to convert to PDF file
 *   produces:
 *    application/pdf 
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/ZipAnalizerUpload'
 *   responses:
 *    200:
 *     description: Returns PDF
 *     content: 
 *      application/pdf:
 *       schema:
 *        type: file
 *        format: binary
 *     headers:
 *      Content-Disposition:
 *       schema:
 *        type: file
 *        format: binary
 *        example: attachment; filename="example.pdf"
 *    404:
 *     description: No connection available or File not found
 *    500:
 *     description: Failure into the server
 */
 app.post("/extractToPDF",cors());

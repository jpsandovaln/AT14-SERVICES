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
 *     description: The language image that will be converted to text
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
 *     description: The language image that will be converted to text
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
 *     description: Width the image will be convert to 
 *     example: 50
 *    height:
 *     type: number
 *     description: Height the image will be convert to text
 *     example: 50
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Extract Text:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *        file:
 *         type: string
 *         format: binary
 *         description: The image file to be extracted text. File types allowed .jpeg, .jpg and .png 
 *        language:
 *         type: string
 *         description: The code language of the image file to be extracted. Example eng, spa, jpn, rus
 *     Extract to PDF:
 *      type: object
 *      properties:
 *       file:
 *        type: string
 *        description: The image file that to be converted into PFD file
 *        format: binary
 *       language:
 *        type: string
 *        description: The code language of the image file to be extracted. Example eng, spa, jpn, rus
 *     Extract Cropped Image:
 *      type: object
 *      properties:
 *       file:
 *        type: string
 *        description: The image file that to be extracted cropp image, specifying the parameters from the image
 *        format: binary
 *       language:
 *        type: string
 *        description: The code language of the image file to be extracted. Example eng, spa, jpn, rus
 *       left:
 *        type: string
 *        description: Image position aligned by its left edge. It's maximum value for this is 100px
 *       top:
 *        type: string
 *        description: Image position aligned by its top edge. It's maximum value for this is 100px
 *       width:
 *        type: string
 *        description: The widht property sets the width of an element using a numeric value. It's maximun value for this is 1000px
 *       height:
 *        type: string
 *        description: The widht property sets the width of an element using a numeric value. It's maximun value for this is 1000px
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
 *     description: Returns link pdf file
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
app.post("/extractToPDF");

 /**
 * @swagger
 * /extractToPDF/{name}:
 *  get:
 *   tags: [Extractor Service]
 *   summary: Endpoint used to download the pdf file
 *   parameters:
 *     - in: path
 *       name: name
 *       schema:
 *         type: string
 *       required: true
 *       description: Name of the file that will be downloaded
 *   responses:
 *    200:
 *     description: Pdf file download succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure downloading file
 */

  app.get("/extractToPDF/:name");

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
 *     description: Image extracted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
 app.post("/extractCroppedImage");

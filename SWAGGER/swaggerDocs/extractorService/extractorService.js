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
 *  FileAnalizerToPDF:
 *   type: object
 *   properties:
 *    file:
 *     type: file
 *     description: The image file that will be converted to PDF
 *     format: binary
 *    language:
 *     type: string
 *     description: The language image that will be converted to PDF
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
 *     description: Width of the image will be extracted
 *     example: 50
 *    height:
 *     type: number
 *     description: Height of the image will be extracted
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
 *         type: file
 *         format: binary
 *         description: The image file that will be extracted text. File types allowed .jpeg, .jpg and .png 
 *        language:
 *         type: string
 *         description: The code language of the image file that will be extracted. Example, eng (English), spa (Spanish), jpn (Japanese), rus (Russian), fra (French), ita (Italian), chi (Chinese - Traditional)
 *     Extract to PDF:
 *      type: object
 *      properties:
 *       file:
 *        type: file
 *        description: The image file that will be converted to PDF file. File types allowed .jpeg, .jpg and .png
 *        format: binary
 *       language:
 *        type: string
 *        description: The code language of the image file that will be extracted. Example, eng (English), spa (Spanish), jpn (Japanese), rus (Russian), fra (French), ita (Italian), chi (Chinese - Traditional)
 *     Extract Cropped Image:
 *      type: object
 *      properties:
 *       file:
 *        type: file
 *        description: The image file that will be extracted a cropp image, specifying the parameters from the image
 *        format: binary
 *       language:
 *        type: string
 *        description: The code language of the image file that will be extracted. Example, eng (English), spa (Spanish), jpn (Japanese), rus (Russian), fra (French), ita (Italian), chi (Chinese - Traditional)
 *       left:
 *        type: number
 *        description: Image position aligned by its left edge. It's maximum value for this is 100px
 *       top:
 *        type: number
 *        description: Image position aligned by its top edge. It's maximum value for this is 100px
 *       width:
 *        type: number
 *        description: The width property sets the width of an element using a numeric value. It's maximun value for this is 1000px
 *       height:
 *        type: number
 *        description: The height property sets the height of an element using a numeric value. It's maximun value for this is 1000px
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
 *   summary: Analyze an image to extract text
 *   description: This endpoint extracts text from an image of different languages
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
 *   summary: Analyze an image to convert to PDF file
 *   description: This endpoint converts an image of different languages in a pdf file
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/FileAnalizerToPDF'
 *   responses:
 *    200:
 *     description: Image converted to pdf file succesfully
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
 *   summary: Download the pdf file converted
 *   description: This endpoint download an image converted in a pdf file by name, done in "extractToPDF" endpoint
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
 *   summary: Analyze an image to extract text from a cropped image
 *   description: This endpoint extracts a text given parameters from a cropped image.
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

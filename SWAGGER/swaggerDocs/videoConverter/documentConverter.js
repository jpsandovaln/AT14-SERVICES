/**
 * @swagger
 * definitions:
 *  DocumentPDF:
 *   type: object
 *   properties:
 *    file:
 *     type: string
 *     description: The PDF document that will be converted to images
 *     format: binary
 *    outputFormat:
 *     type: string
 *     description: Format value that will be obtained from the document
 *     example: '.jpg'
 *    outputSize:
 *     type: string
 *     description: Output size of the PDF document
 *     example: '320x240'
 *    rotation:
 *     type: string
 *     description: Rotate the image in degrees
 *     example: '180'
 *    quality:
 *     type: string
 *     description: Define the output quality of the image
 *     example: '0'
 *    paintEffect:
 *     type: string
 *     description: Distorts the color of the image
 *     example: '0'
 *    type:
 *     type: string
 *     description: Define the output type effect
 *     example: '-monochrome'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Document Converter:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *        file:
 *         type: string
 *         format: binary
 *         description: The PDF document that will be converted to an image
 *        outputFormat:
 *         type: string
 *         description: Output format of the PDF document jpg, png, jpeg, tif
 *        outputSize:
 *         type: string
 *         description: Output size of the PDF document
 *        rotation:
 *         type: string
 *         description: Rotate the image in degrees from 90, 180, 270
 *        quality:
 *         type: string
 *         description: Define the output quality of the image. Should be disabled
 *        paintEffect:
 *         type: string
 *         description: Distorts the color of the image. It could be values from 0 to 5
 *        type:
 *         type: string
 *         description: Define the output type effect. It could be values -monochrome, -colorspace gray, "" colorfull
 */

/**
 * @swagger
 * tags:
 *  name: Document Converter
 *  description: To convert a PDF document to images
 */

/**
 * @swagger
 * /convertPdftoImage:
 *  post:
 *   tags: [Document Converter]
 *   summary: Convert PDF file to images
 *   description: This Api converts an PDF document into an Image
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/DocumentPDF'
 *   responses:
 *    200:
 *     description: PDF file converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
 app.post("/convertPdftoImage", cors());

  /**
 * @swagger
 * /convertPdftoImage/{name}:
 *  get:
 *   tags: [Document Converter]
 *   summary: Download the image file converted
 *   description: This endpoint is used to download the data information done by "convertPdftoImage" endpoint
 *   parameters:
 *     - in: path
 *       name: name
 *       schema:
 *         type: string
 *       required: true
 *       description: Name of the file that will be downloaded
 *   responses:
 *    200:
 *     description: PDF converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
app.get("/convertPdftoImage/:name");

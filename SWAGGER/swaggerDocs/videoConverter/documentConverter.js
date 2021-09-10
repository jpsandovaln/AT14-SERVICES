/**
 * @swagger
 * definitions:
 *  DocumentPDF:
 *   type: object
 *   properties:
 *    imageFile:
 *     type: string
 *     description: The PDF document that will be converted to an image
 *     format: binary
 *    outputFormat:
 *     type: string
 *     description: Format value that will be obtained from the document
 *     example: '.jpg'
 *    outputSize:
 *     type: string
 *     description: Output size
 *     example: '320x240'
 *    rotation:
 *     type: string
 *     description: Output rotation
 *     example: '180'
 *    paintEffect:
 *     type: string
 *     description: Output paint effect
 *     example: '0'
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
 *        imagefile:
 *         type: string
 *         format: binary
 *         description: The PDF document that will be converted to an image
 *        outputFormat:
 *         type: string
 *         description: Output format of the PDF document
 *        outputSize:
 *         type: string
 *         description: Output size of the PDF document
 *        rotation:
 *         type: string
 *         description: Ouput rotation of the PDF document
 *        paintEffect:
 *         type: string
 *         description: Output paint effect
 */

/**
 * @swagger
 * tags:
 *  name: Document Converter
 *  description: To convert a document PDF to an image
 */

/**
 * @swagger
 * /DocumentConverter:
 *  post:
 *   tags: [Document Converter]
 *   summary: Convert document 
 *   description: This Api convert an PDF document into an Image
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/Image'
 *   responses:
 *    200:
 *     description: Image converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in converting Image
 */
 app.post("/convertPdftoImage", cors());

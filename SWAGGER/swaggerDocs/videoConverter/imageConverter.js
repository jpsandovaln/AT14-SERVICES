/**
 * @swagger
 * definitions:
 *  Image:
 *   type: object
 *   properties:
 *    file:
 *     type: string
 *     description: The image file that will be converted
 *     format: binary
 *    rotate:
 *     type: string
 *     description: Value to rotate image that will be obtained from the image converter
 *     example: '30'
 *    outputFormat: 
 *     type: string
 *     description: Output format of the image
 *     example: '.jpg'
 *    monochrome:
 *     type: string
 *     description: Output monochrome of the image
 *     example: 'false'
 *    paint: 
 *     type: string
 *     description: The Image converted will change paint
 *     example: '0'
 *    doubling: 
 *     type: string
 *     description: Doubling image
 *     example: '0'
 *    quality:
 *     type: string
 *     description: The Image converter will change quality
 *     example: '0'
 *    resize:
 *     type: string
 *     description: Output size of the image
 *     example: '0'
 *    grayScale:
 *     type: string
 *     description: Option to agree if the converter will obtain the gray scale from the image
 *     example: 'false'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Image Converter:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *        file:
 *         type: string
 *         format: binary
 *         description: The image file that will be converted to a different formats
 *        rotate:
 *         type: string
 *         description: Ouput rotate image
 *        outputFormat:
 *         type: string
 *         description: Output format of the image
 *        monochrome:
 *         type: string
 *         description: Output monochrome the image
 *        paint:
 *         type: string
 *         description: Paint image
 *        doubling:
 *         type: string
 *         description: Doubling image
 *        quality:
 *         type: string
 *         description: Quality image
 *        resize:
 *         type: string
 *         description: Output format of the image
 *        grayScale:
 *         type: string
 *         description: Gray scale image
 */

/**
 * @swagger
 * tags:
 *  name: Image Converter
 *  description: To convert an image to different formats
 */

/**
 * @swagger
 * /imageConverter:
 *  post:
 *   tags: [Image Converter]
 *   summary: Convert image 
 *   description: This API converts image to different formatS of Image
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
 *     description: Failure in Server
 */
 app.post("/imageConverter", cors());

/**
 * @swagger
 * /images:
 *  get:
 *   tags: [Image Converter]
 *   summary: Gets all the data image files
 *   description: This endpoint gets all images files converted
 *   responses:
 *    200:
 *     description: Image converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
 app.get("/images");

 /**
 * @swagger
 * /images/{name}:
 *  get:
 *   tags: [Image Converter]
 *   summary: Download the image file converted
 *   description: This endpoint is used to download the data information done by "images" endpoint
 *   parameters:
 *     - in: path
 *       name: name
 *       schema:
 *         type: string
 *       required: true
 *       description: Name of the file that will be downloaded
 *   responses:
 *    200:
 *     description: Image converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in Server
 */
app.get("/images/:name");

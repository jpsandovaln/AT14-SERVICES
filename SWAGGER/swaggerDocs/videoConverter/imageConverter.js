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
 *    rotateImage:
 *     type: string
 *     description: Value to rotate image that will be obtained from the image converter
 *     example: '1'
 *    doublingImage:
 *     type: string
 *     description: Doubling image
 *     example: '1'
 *    formatImage:
 *     type: string
 *     description: Output format of the Image
 *     example: '15'
 *    monochromeImage:
 *     type: string
 *     description: Output monochrome of the Image
 *     example: '270'
 *    paintImage:
 *     type: string
 *     description: The Image converted will change paint
 *     example: 'true'
 *    qualityImage:
 *     type: string
 *     description: The Image converter will change quality
 *     example: 'false'
 *    resizeImage:
 *     type: string
 *     description: Output format of the Image
 *     example: '.flv'
 *    grayScaleImage:
 *     type: string
 *     description: Option to agree if the converter will obtain the gray scale from the Image
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
 *         description: ask
 *        rotateImage:
 *         type: string
 *         description: ask
 *        doublingImage:
 *         type: string
 *         description: ask
 *        formatImage:
 *         type: string
 *         description: Output format of the Image
 *        monochromeImage:
 *         type: string
 *         description: Output monochrome the Image
 *        paintImage:
 *         type: string
 *         description: ask
 *        qualityImage:
 *         type: string
 *         description: ask
 *        resizeImage:
 *         type: string
 *         description: Output format of the Image
 *        grayScaleImage:
 *         type: string
 *         description: ask
 */

/**
 * @swagger
 * tags:
 *  name: Image Converter
 *  description: The books managing API
 */

/**
 * @swagger
 * /ImageConverter:
 *  post:
 *   tags: [Image Converter]
 *   summary: Convert image 
 *   description: this api convert image into images or into different format of Image
 *   requestBody:
 *    content:
 *     multipart/form-data:
 *      schema:
 *       $ref: '#/definitions/Image'
 *   responses:
 *    200:
 *     description: Image converted succesfully
 *    404:
 *     description: non conection available
 *    500:
 *     description: failure in converting Image
 */
 app.post("/ImageConverter", cors());
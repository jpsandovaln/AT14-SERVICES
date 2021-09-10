const express = require("express");
const cors = require("cors");
const app = express.Router();

/**
 * @swagger
 * definitions:
 *  GetData:
 *   type: object
 *   properties:
 *    file:
 *     type: string
 *     description: The video file that will be converted
 *     format: binary
 *    ratio:
 *     type: string
 *     description: ask
 *     example: '20'
 *  DeleteData:
 *   type: object
 *   properties:
 *    file:
 *     type: string
 *     description: The video file that will be converted into images
 *     format: binary
 *    obtainFrames:
 *     type: string
 *     description: Option to determine if the video frames will be obtained
 *     example: 'true'
 *  GetDataById:
 *   type: object
 *   properties:
 *    file:
 *     type: string
 *     description: The video file that will be sent
 *     format: binary
 */

/**
 * @swagger
 * tags:
 *  name: Video Converter
 *  description: The books managing API
 */

/**
 * @swagger
 * /file:
 *  get:
 *   tags: [Data Base]
 *   summary: Gets all the data from the database
 *   description: This end pont only need to send an URL to get a response
 *   responses:
 *    200:
 *     description: video converted succesfully
 *    404:
 *     description: non conection available
 *    500:
 *     description: failure in converting video
 */
app.get("/file");

/**
 * @swagger
 * /file/{id}:
 *  delete:
 *   tags: [Data Base]
 *   summary: Delete data from the database by sending an id
 *   description: This end pont only need to send an URL to get a response
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: File id from the database
 *   responses:
 *    200:
 *     description: video converted succesfully
 *    404:
 *     description: non conection available
 *    500:
 *     description: failure in converting video
 */
app.options("/file/:id", cors());
app.delete("/file/:id");

/**
 * @swagger
 * /file/{id}:
 *  get:
 *   tags: [Data Base]
 *   summary: Get data from the database by sending an specific id
 *   description: This endpoint only needs to send an URL to get a response
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: File id from the database
 *   responses:
 *    200:
 *     description: Video converted succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure in converting video
 */
app.get("/file/:id");

module.exports = app;

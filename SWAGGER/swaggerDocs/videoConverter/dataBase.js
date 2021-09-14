const express = require("express");
const cors = require("cors");
const app = express.Router();

/**
 * @swagger
 * tags:
 *  name: Database
 *  description: CRUD operations
 */

/**
 * @swagger
 * /file:
 *  get:
 *   tags: [Database]
 *   summary: Gets all the data from the database
 *   description: This endpoint only need to send an URL to get a response
 *   responses:
 *    200:
 *     description: Get data succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure getting data
 */
app.get("/file");

/**
 * @swagger
 * /file/{id}:
 *  delete:
 *   tags: [Database]
 *   summary: Delete data from the database by sending an id
 *   description: This endpoint only need to send an URL to get a response
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: Delete a specific data by id from the database
 *   responses:
 *    200:
 *     description: Delete data succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure deleting data
 */
app.options("/file/:id", cors());
app.delete("/file/:id");

/**
 * @swagger
 * /file/{id}:
 *  get:
 *   tags: [Database]
 *   summary: Get data from the database by sending an specific id
 *   description: This endpoint only needs to send an URL to get a response
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: Get a specific data by id from the database
 *   responses:
 *    200:
 *     description: Get data succesfully
 *    404:
 *     description: Non conection available
 *    500:
 *     description: Failure getting data
 */
app.get("/file/:id");

module.exports = app;

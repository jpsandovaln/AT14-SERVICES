require("dotenv").config("../.env");
const express = require('express');
const router = express.Router();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.SERVICE_PORT || 4000;
const CONVERTER_PORT = process.env.CONVERTER_PORT;

const videoConverterOptions = {
    customCss: `
    .swagger-ui .topbar { display: none; padding: 0px 0; }
    .topbar-wrapper img { display: none }
    .swagger-ui .info { margin: 10px 0 }`,
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Video Converter",
            version: "1.0.0",
            description: "Api to convert videos into imagenes",
            contact: {
                name: "AT14",
            },
        },
        servers: [
            {
                url: "http://" + HOSTNAME + ":" + CONVERTER_PORT,
                description: "Port where the converter service works",
            },
        ],
    },
    apis: ["./swaggerDocs/videoConverter/*.js"],
};

const videoConverterDocs = swaggerJSDoc(videoConverterOptions);

const swaggerHtml = swaggerUI.generateHTML(
    videoConverterDocs,
    videoConverterOptions
);

router.use("/", swaggerUI.serveFiles(videoConverterDocs, videoConverterOptions));
router.get("/", (req, res) => {
    res.send(swaggerHtml);
});

module.exports = router;

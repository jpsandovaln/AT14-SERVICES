require("dotenv").config("../.env");
const express = require('express');
const router = express.Router();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.SERVICE_PORT || 4000;
const EXTRACTOR_PORT = process.env.EXTRACTOR_PORT || 8001;

const extractorServiceOptions = {
    customCss: `
    .topbar-wrapper img { content:url(http://${HOSTNAME}:${PORT}/img/Icon.ico); height:0px;}
    .swagger-ui .topbar { border-bottom: 0px solid #5dc6d1; padding: 0px 0; }
    .swagger-ui .info { margin: 10px 0 }`,
    customSiteTitle: "API Documentation AT14",    
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Extractor Service",
            version: "1.0.0",
            description: "API to convert images to text",
            contact: {
                name: "SNIFFER DOG",
            },
        },
        servers: [
            {
                url: "http://" + HOSTNAME + ":" + EXTRACTOR_PORT,
                description: "Port where the extractor service works",
            },
        ],
    },
    apis: ["./swaggerDocs/extractorService/*.js"],
};

const extractorServiceDocs = swaggerJSDoc(extractorServiceOptions);

const swaggerHtml = swaggerUI.generateHTML(
    extractorServiceDocs,
    extractorServiceOptions
);

router.use("/", swaggerUI.serveFiles(extractorServiceDocs, extractorServiceOptions));
router.get("/", (req, res) => {
    res.send(swaggerHtml);
});

module.exports = router;

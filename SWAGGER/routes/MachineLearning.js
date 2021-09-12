require("dotenv").config("../.env");
const express = require('express');
const router = express.Router();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.SERVICE_PORT || 4000;
const ML_PORT = process.env.ML_PORT;

const machineLearningOptions = {
    customCss: `
    .topbar-wrapper img { content:url(http://${HOSTNAME}:${PORT}/img/Icon.ico); height:0px;}
    .swagger-ui .topbar { border-bottom: 0px solid #5dc6d1; padding: 0px 0; }
    .swagger-ui .info { margin: 10px 0 }`,
    customSiteTitle: "API Documentation AT14",    
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Machine Learning",
            version: "1.0.0",
            description: "Api to search into images specific objects",
            contact: {
                name: "SNIFFER DOG",
            },
        },
        servers: [
            {
                url: "http://" + HOSTNAME + ":" + ML_PORT,
                description: "Port where the machine learning service works",
            },
        ],
    },
    apis: ["./swaggerDocs/machineLearning/*.js"],
};

const machineLearningDocs = swaggerJSDoc(machineLearningOptions);

const swaggerHtml = swaggerUI.generateHTML(
    machineLearningDocs,
    machineLearningOptions
);

router.use("/", swaggerUI.serveFiles(machineLearningDocs, machineLearningOptions));
router.get("/", (req, res) => {
    res.send(swaggerHtml);
});

module.exports = router;

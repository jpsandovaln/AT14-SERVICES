const express = require("express");
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const dbRouter = require("./swaggerDocs/videoConverter/dataBase");

const PORT = process.env.PORT || 4000;

const app = express();
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Video Converter",
            version: "1.0.0",
            description: "Api to convert videos into imagenes",
            contact: {
                name: "AT14",
                url: "http://localhost:8080/api-docs/swagger.json",
            },
        },
        servers: [
            {
                url: "http://localhost:8080",
                description: "Port where the converter service works",
            },
            {
                url: "http://localhost:8085",
                description: "Port where the machine learning service works",
            },
        ],
    },
    apis: [
        "./swaggerDocs/machineLearning/*.js",
        "./swaggerDocs/videoConverter/*.js",
    ],
};

const videoConverterOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Video Converter",
            version: "1.0.0",
            description: "Api to convert videos into imagenes",
            contact: {
                name: "AT14",
                url: "http://localhost:8080/videoConverter",
            },
        },
        servers: [
            {
                url: "http://localhost:8080",
                description: "Port where the converter service works",
            },
        ],
    },
    apis: ["./swaggerDocs/videoConverter/*.js"],
};

const machineLearningOptions = {
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
                url: "http://localhost:8085",
                description: "Port where the machine learning service works",
            },
        ],
    },
    apis: ["./swaggerDocs/machineLearning/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
const machineLearningDocs = swaggerJSDoc(machineLearningOptions);
const videoConverterDocs = swaggerJSDoc(videoConverterOptions);
app.use(cors());

var swaggerHtmlV1 = swaggerUI.generateHTML(swaggerDocs, swaggerOptions);
var swaggerHtmlV2 = swaggerUI.generateHTML(
    machineLearningDocs,
    machineLearningOptions
);
var swaggerHtmlV3 = swaggerUI.generateHTML(
    videoConverterDocs,
    videoConverterOptions
);

app.use("/api-docs", swaggerUI.serveFiles(swaggerDocs, swaggerOptions));
app.get("/api-docs", (req, res) => {
    res.send(swaggerHtmlV1);
});

app.use(
    "/MachineLearning",
    swaggerUI.serveFiles(machineLearningDocs, machineLearningOptions)
);
app.get("/MachineLearning", (req, res) => {
    res.send(swaggerHtmlV2);
});

app.use(
    "/VideoConverter",
    swaggerUI.serveFiles(videoConverterDocs, videoConverterOptions)
);
app.get("/VideoConverter", (req, res) => {
    res.send(swaggerHtmlV3);
});

app.use(express.json());
app.use(dbRouter);

app.listen(PORT, () =>
    console.log(
        "The server is running on http://localhost:" + PORT + "/api-docs"
    )
);

require("dotenv").config(".env");
const express = require("express");
const path = require('path');
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const dbRouter = require("./swaggerDocs/videoConverter/dataBase");

const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.SERVICE_PORT || 4000;

const CONVERTER_PORT = process.env.CONVERTER_PORT;
const ML_PORT = process.env.ML_PORT;


const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('./public'));

const swaggerOptions = {
    customCss: `
    .swagger-ui .topbar { display: none; padding: 0px 0; }
    .topbar-wrapper img { display: none }
    .swagger-ui .info { margin: 10px 0 }`,
    customSiteTitle: "API Documentation AT14",
    swaggerOptions: {
        explorer: true,
        urls: [
        {
            url: `http://localhost:8000/MachineLearning`,
            name: 'Apple',
        },
        {
            url: `http://localhost:8000/VideoConverter`,
            name: 'Banana',
        },
    ],
    },    
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Video Converter",
            "x-logo": {
                "url": "https://cdn.worldvectorlogo.com/logos/quartz.svg",
                "backgroundColor": "#FFFFFF"
            },            
            version: "1.0.0",
            description: "Api to convert videos into imagenes",
            termsOfService: "http://example.com/terms/",            
            contact: {
                name: "AT14",
                url: "http://www.example.com/support",
                email: "support@example.com",
            },
        },
        servers: [
            {
                url: "http://" + HOSTNAME + ":" + CONVERTER_PORT,
                description: "Port where the converter service works",
            },
            {
                url: "http://" + HOSTNAME + ":" + ML_PORT,
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
                url: "http://" + HOSTNAME + ":" + ML_PORT,
                description: "Port where the converter service works",
            },
        ],
    },
    apis: ["./swaggerDocs/videoConverter/*.js"],
};

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

app.get('/', function(req, res) {
    res.render('pages/home');
});

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
        "The server is running on http://localhost:" + PORT
    )
);

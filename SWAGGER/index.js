require("dotenv").config(".env");
const express = require("express");
const path = require('path');
const cors = require("cors");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const dbRouter = require("./swaggerDocs/videoConverter/dataBase");
const MachineLearning = require('./routes/MachineLearning');
const VideoConverter = require('./routes/VideoConverter');

const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.SERVICE_PORT || 4000;
const ML_PORT = process.env.ML_PORT;
const CONVERTER_PORT = process.env.CONVERTER_PORT;

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

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use(cors());

var swaggerHtmlV1 = swaggerUI.generateHTML(swaggerDocs, swaggerOptions);

app.get('/', function(req, res) {
    res.render('pages/home');
});

app.use("/api-docs", swaggerUI.serveFiles(swaggerDocs, swaggerOptions));
app.get("/api-docs", (req, res) => {
    res.send(swaggerHtmlV1);
});

app.use("/MachineLearning", MachineLearning);
app.use("/VideoConverter", VideoConverter);

app.use(express.json());
app.use(dbRouter);

app.listen(PORT, () =>
    console.log(
        "The server is running on http://localhost:" + PORT
    )
);

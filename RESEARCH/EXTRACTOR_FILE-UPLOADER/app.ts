import http from "http";
import express from "express";
import routes from "./src/services";
import dotenv from "dotenv";
import middleware from "./src/middleware";
import errorHandlers from "./src/middleware/errorHandlers";
import { applyMiddleware, applyRoutes } from "./src/utils";

dotenv.config();

process.on("uncaughtException", (e) => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", (e) => {
    console.log(e);
    process.exit(1);
});

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const PORT = process.env.PORT;
const server = http.createServer(router);

console.log(`API is running`);

server.listen(PORT, () =>
    console.log(`Server is running http://localhost:${PORT}...`)
);

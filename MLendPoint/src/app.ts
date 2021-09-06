import express from "express";
import * as path from "path";
import homeRouter from "./routes/home";
import analizeZip from "./routes/analizeZip";
import analizeImages from "./routes/analizeImages";
import aboutRouter from "./routes/about";
import cors from "cors";
import createFolders from "./createFolders";

createFolders();

const app = express();
app.use(cors());

const port = process.env.PORT || 8085;

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRouter);
app.use("/analizeZip", analizeZip);
app.use("/analizeImages", analizeImages);
app.use("/about", aboutRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

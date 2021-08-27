import express = require("express");
import path = require("path");
import homeRouter = require("./routes/home");
import analizeZip = require("./routes/analizeZip");
import analizeImages = require("./routes/analizeImages");
import aboutRouter = require("./routes/about");
import cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 8080;

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

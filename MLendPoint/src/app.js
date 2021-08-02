const express = require("express");
const app = express();
const homeRouter = require("./routes/home");
const analizeZip = require("./routes/analizeZip");
const analizeImages = require("./routes/analizeImages");
const aboutRouter = require("./routes/about");
const cors = require('cors');
app.use(cors())

const port = process.env.PORT || 8080;

app.use(express.static("../public/"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRouter);
app.use("/analizeZip", analizeZip);
app.use("/analizeImages", analizeImages);
app.use("/about", aboutRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


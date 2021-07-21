const express = require("express")
const app = express()
const homeRouter = require("./routes/home")
const analizeImage = require("./routes/analizeImage")
const aboutRouter = require("./routes/about")

const port = process.env.PORT || 8080;

app.use(express.static('../public/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', homeRouter);
app.use('/analizeImage', analizeImage);
app.use('/about', aboutRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

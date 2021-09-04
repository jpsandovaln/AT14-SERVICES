const fs = require("fs");

const createFolders = () => {
    fs.mkdirSync("./resources/image", { recursive: true });
    fs.mkdirSync("./resources/outputPath", { recursive: true });
    fs.mkdirSync("./resources/upload", { recursive: true });
    fs.mkdirSync("./resources/video", { recursive: true });
    fs.mkdirSync("./resources/zip", { recursive: true });
};

module.exports = createFolders;

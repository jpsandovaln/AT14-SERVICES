const fs = require("fs");

class CreateFolders {
    createFolders = () => {
        fs.mkdirSync("./resources/image", { recursive: true });
        fs.mkdirSync("./resources/outputPath", { recursive: true });
        fs.mkdirSync("./resources/upload", { recursive: true });
        fs.mkdirSync("./resources/video", { recursive: true });
        fs.mkdirSync("./resources/zip", { recursive: true });
    };
}

module.exports = CreateFolders;

const fs = require("fs");
const path = require("path");

class ObtainDirectory {
    constructor() {}

    filesList(path: string) {
        return fs.readdirSync(path);
    }
}

module.exports = ObtainDirectory;

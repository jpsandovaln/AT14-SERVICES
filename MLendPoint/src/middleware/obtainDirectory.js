const fs = require("fs");
const path = require("path");

class ObtainDirectory{
    constructor() {}

    filesList(path) {
        return fs.readdirSync(path);
    }
}

module.exports = ObtainDirectory;
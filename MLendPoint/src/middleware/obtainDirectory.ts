import fs from "fs";
import path from "path";

class ObtainDirectory {
    constructor() {}

    filesList(path) {
        return fs.readdirSync(path);
    }
}

module.exports = ObtainDirectory;

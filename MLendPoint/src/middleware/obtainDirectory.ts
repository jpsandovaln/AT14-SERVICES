import fs from "fs";
import path from "path";

class ObtainDirectory {
    constructor() {}

    filesList(path: string) {
        return fs.readdirSync(path);
    }
}

module.exports = ObtainDirectory;

import fs from "fs";
import path from "path";

class ObtainDirectory {
    filesList(path) {
        return fs.readdirSync(path);
    }
}

export default ObtainDirectory;

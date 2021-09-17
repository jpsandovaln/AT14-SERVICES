import fs from "fs";

class ObtainDirectory {
    filesList(path: string): string[] {
        return fs.readdirSync(path);
    }
}

export default ObtainDirectory;

import * as fs from "fs";
class CreateFolders {
    createFolders = (): void => {
        fs.mkdirSync("./public/images", { recursive: true });
        fs.mkdirSync("./public/unZipFiles", { recursive: true });
    };
}

export default CreateFolders;

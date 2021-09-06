import * as fs from "fs";

const createFolders = (): void => {
    fs.mkdirSync("./public/images", { recursive: true });
    fs.mkdirSync("./public/unZipFiles", { recursive: true });
};
export default createFolders;

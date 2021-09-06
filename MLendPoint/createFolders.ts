import { mkdirSync } from "fs";

const createFolders = (): void => {
    mkdirSync("./public/images", { recursive: true });
    mkdirSync("./public/unZipFiles", { recursive: true });
};
export default createFolders;

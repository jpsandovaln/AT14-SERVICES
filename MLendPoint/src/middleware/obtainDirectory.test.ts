import fs from "fs";
import ObtainDirectory from "./obtainDirectory";
const obtainDirectory = new ObtainDirectory();

jest.mock("fs");

test("obtain directory", () => {
    fs.readdirSync = jest.fn();
    const fileList = obtainDirectory.filesList("directory");
    expect(fs.readdirSync).toHaveBeenCalledTimes(1);
    expect(fs.readdirSync).toHaveBeenCalledWith("directory");
});

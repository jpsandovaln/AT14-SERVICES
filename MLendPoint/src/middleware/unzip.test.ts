import AdmZip from "adm-zip";
import UnZip from "./unzip";

jest.mock("adm-zip", () => {
    const admZipExtractAllMock = jest.fn();
    return {
        __esModule: true,
        admZipExtractAllMock,
        default: jest.fn(() => ({ extractAllTo: admZipExtractAllMock }))
    };
});

const unzip = new UnZip();
const admzip = new AdmZip();

test("receive string", () => {
    const extract = unzip.extractZip("path", "out");

    expect(admzip.extractAllTo).toHaveBeenCalledTimes(1);
    expect(admzip.extractAllTo).toHaveBeenCalledWith("out", true);
});

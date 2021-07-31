require("dotenv").config("../../.env");
const fs = require("fs");
const outputPath = process.env.OUTPUT_PATH;
const zipPath = process.env.ZIP_PATH;
const to_zip = fs.readdirSync(outputPath);
const admz = require("adm-zip");

class Zip {
    zipDownload(req, res) {
        const zip = new admz();
        for (var k = 0; k < to_zip.length; k++) {
            zip.addLocalFile(outputPath + to_zip[k]);
        }
        const downloadName = `${Date.now()}.zip`;
        const data = zip.toBuffer();

        zip.writeZip(zipPath + downloadName + "/");

        res.set("Content-Type", "application/octet-stream");
        res.set("Content-Disposition", `attachment; filename=${downloadName}`);
        res.set("Content-Length", data.length);
        res.send(data);
    }
}

module.exports = Zip;

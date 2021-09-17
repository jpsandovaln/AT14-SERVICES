const md5File = require("md5-file");

class Md5File {
    static getMD5File(filePath) {
        const hash = md5File.sync(filePath);
        return hash;
    }
}

module.exports = Md5File;

const fs = require('fs');
const path = require('path');

class FileUtil {
    static copyFile(file, destFolder, newName) {
        const source = fs.createReadStream(file);
        const dest = fs.createWriteStream(path.resolve(destFolder, newName));
        source.pipe(dest);
        source.on('end', () => { console.log('Succesfully copied'); });
        source.on('error', (err) => { console.log(err); });
    }
}

module.exports = FileUtil;

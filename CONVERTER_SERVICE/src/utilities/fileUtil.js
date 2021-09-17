const fs = require('fs');
const path = require('path');

class FileUtil {
    static async copyFile(file, destFolder, newName) {
        const source = fs.createReadStream(file);
        const dest = fs.createWriteStream(path.resolve(destFolder, newName));
        await new Promise ((resolve, rejects)=>{
            source.pipe(dest);
            source.on('end', () => {
                console.log('Succesfully copied');
                resolve();
            });
            source.on('error', (err) => { 
                console.log(err);
                rejects();
            });
        });
    }
}

module.exports = FileUtil;

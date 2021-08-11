const Md5File = require('../utilities/checksum');

class Verify{
    constructor(){};

    verifyChecksum(hashUI, filePath ){
        const hash = new Md5File(filePath);
     // verification implementation missing
    }
}

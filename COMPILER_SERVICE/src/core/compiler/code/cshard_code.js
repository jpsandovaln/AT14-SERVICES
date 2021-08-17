const ExternalLibrary = require('./external_library');

class CShardCode {

    constructor() {
    }

    runCode(fileCode) {
        const external = new ExternalLibrary();
        const result = external.addFile(fileCode).execute();
        return result;
    }
}

module.exports = CShardCode;

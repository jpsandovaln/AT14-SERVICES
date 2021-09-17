const CShardCode = require('./code/cshard_code');
const Compiler = require('./compiler');

class CShardCompiler extends Compiler {
    constructor(path, binary) {
        super();
        this._path = path;
        this._binary = binary;
    }

    async compiler() {
        const cshard = new CShardCode();
        return cshard.runCode('file path c#');
    }
}

module.exports = CShardCompiler;

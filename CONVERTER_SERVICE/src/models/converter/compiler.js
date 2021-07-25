//const { exec } = require('child_process')
const util = require("util");
const exec = util.promisify(require("child_process").exec);
//const { stdout, stderr } = require('process')

class Compiler {
    constructor() {}

    async execute(command) {
        try {
            const { stdout, stderr } = await exec(command);
            return { stdout, stderr };
        } catch (err) {
            return { err };
        }
    }
}
module.exports = Compiler;

const { exec } = require('child_process')
const { stdout, stderr } = require('process')

class Compiler{
    constructor() {}

    execute(command) {
        return new Promise(function(resolve, reject) {
            exec(command, (err, stdout, stderr) => {
                if (err) {
                    reject(err)
                }
                resolve({ stdout });
            });
        })    
    }
}

module.exports = Compiler;
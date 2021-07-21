const { exec } = require('child_process');

class Execute {
    run(command) {
        return new Promise(function(resolve, reject) {
            exec(command, (err, stdout, stderr) => {
                if (err) {
                    reject(err)
                }
                resolve({ stdout });
            });
        });
    }
}

module.exports = Execute;

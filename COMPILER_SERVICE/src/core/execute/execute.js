const { exec } = require('child_process');

class Execute {
    run(command) {
        return new Promise(function(resolve, reject) {
            exec(command, (err, stdout, stderr) => {
                if (err) {
                    throw new Error('execute error.');
                }
                resolve({ stdout });
            });
        });
    }
}

module.exports = Execute;

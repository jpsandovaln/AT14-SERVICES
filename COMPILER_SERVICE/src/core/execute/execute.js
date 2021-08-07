const { exec } = require('child_process');
const ExecuteException = require('../../common/exception/execute_exception');

class Execute {
    run(command) {
        return new Promise(function(resolve, reject) {
            exec(command, (err, stdout, stderr) => {
                if (err) {
                    throw new ExecuteException('execute error.');
                }
                resolve({ stdout });
            });
        });
    }
}

module.exports = Execute;

const { exec } = require('child_process');

class Compiler {
    constructor() {
        console.info('Instance created');
    }

    execute() {
        const command = '"C:/Program Files/Java/jdk1.8.0_251/bin/javac" d:/HelloWorld.java && java -cp d:/ HelloWorld';
        exec(command, (err, stdout, stderr) => {
            if (err) {
                console.info(err);
                return;
            }

            console.info('stdout: ' + stdout);
            console.info('stderr: ' + stderr);
        });
    }
}

module.exports = Compiler;

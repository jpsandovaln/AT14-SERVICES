const { exec } = require('child_process');
const path = require('path');

class Compiler {
    constructor() {
        console.info('Instance created');
    }

    execute(filePath) {
        // const command = '"C:/Program Files/Java/jdk1.8.0_251/bin/javac" d:/HelloWorld.java && java -cp d:/ HelloWorld';
        const JAVA_COMPILER = '"C:/Program Files/Java/jdk1.8.0_251/bin/javac" ';
        const JAVA_EXECUTE = 'java ';
        const JAVA_CP_PARAM = '-cp ';
        const JAVA_AND = ' && ';
        const JAVA_SPACE = ' ';
        
        const command =
            JAVA_COMPILER +
            filePath +
            JAVA_AND + 
            JAVA_EXECUTE +
            JAVA_CP_PARAM +
            path.dirname(filePath) + 
            JAVA_SPACE + 
            path.parse(filePath).name;

        console.info(command);

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

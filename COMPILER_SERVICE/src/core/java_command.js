const path = require('path');
const Command = require('./comand');

const JAVA_COMPILER = 'javac ';
const JAVA_EXECUTE = 'java ';
const JAVA_CP_PARAM = '-cp ';
const JAVA_AND = ' && ';
const JAVA_SPACE = ' ';

class JavaCommand extends Command{
    build(parameter) {
        if (!parameter) {
            throw new Error('Java parameter invalid.');
        }
        try {
            const command =
                parameter.javaBinaryPath + JAVA_COMPILER +
                parameter.filePath +
                JAVA_AND + 
                parameter.javaBinaryPath + JAVA_EXECUTE +
                JAVA_CP_PARAM +
                path.dirname(parameter.filePath) + 
                JAVA_SPACE + 
                path.parse(parameter.filePath).name;

            return command;
        } catch (err) {
            throw new Error('Error building java command.');
        }
    }
}

module.exports = JavaCommand;

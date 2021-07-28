const path = require('path');
const Command = require('./comand');

const JAVA_COMPILER = 'javac ';
const JAVA_EXECUTE = 'java ';
const JAVA_CP_PARAM = '-cp ';
const JAVA_AND = ' && ';
const JAVA_SPACE = ' ';

class JavaCommand extends Command{
    build(parameter) {
        const command =
            parameter.getJavaBinaryPath() + JAVA_COMPILER +
            parameter.getFilePath() +
            JAVA_AND + 
            parameter.getJavaBinaryPath() + JAVA_EXECUTE +
            JAVA_CP_PARAM +
            path.dirname(parameter.getFilePath()) + 
            JAVA_SPACE + 
            path.parse(parameter.getFilePath()).name;

        return command;
    }
}

module.exports = JavaCommand;

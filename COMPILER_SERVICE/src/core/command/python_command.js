const Command = require("./comand");

const PYTHON_COMPILER = 'python ';

class PythonCommand extends Command{
    build(parameter) {
        const command =
            parameter.pythonBinaryPath + PYTHON_COMPILER +
            parameter.filePath;
        return command;
    }
}

module.exports = PythonCommand;

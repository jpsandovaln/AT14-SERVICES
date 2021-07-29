const Command = require("./comand");

const PYTHON_COMPILER = 'python ';

class PythonCommand extends Command{
    build(parameter) {
        const command =
            parameter.getPythonBinaryPath() + PYTHON_COMPILER +
            parameter.getFilePath();
        return command;
    }
}

module.exports = PythonCommand;

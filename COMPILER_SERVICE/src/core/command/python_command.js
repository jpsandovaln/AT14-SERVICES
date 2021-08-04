const Command = require("./comand");

const PYTHON_COMPILER = 'python ';

class PythonCommand extends Command{
    build(parameter) {
        if (!parameter) {
            throw new Error('Parameter invalid.');
        }
        try {
            const command =
                parameter.pythonBinaryPath + PYTHON_COMPILER +
                parameter.filePath;
            return command;
        } catch (err) {
            throw new Error('Error building python command.');
        }

    }
}

module.exports = PythonCommand;

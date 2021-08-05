const Command = require("./comand");
const CommandException = require('../../common/exception/command_exception');
const ParameterInvalidException = require('../../common/exception/parameter_exception');

const PYTHON_COMPILER = 'python ';

class PythonCommand extends Command{
    build(parameter) {
        if (!parameter) {
            throw new ParameterInvalidException('Python parameter invalid.', 'SAB-0125478');
        }
        try {
            const command =
                parameter.pythonBinaryPath + PYTHON_COMPILER +
                parameter.filePath;
            return command;
        } catch (err) {
            throw new CommandException('Error building python command.', '460', 'SAB-7788');
        }

    }
}

module.exports = PythonCommand;

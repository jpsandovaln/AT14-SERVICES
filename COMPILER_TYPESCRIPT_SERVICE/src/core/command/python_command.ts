import { CommandException } from '../../common/exception/command_exception';
import { Command } from './command';
import { PythonParameter } from '../parameter/python_parameter';

const PYTHON_COMPILER = 'python ';

export class PythonCommand implements Command {
    public build(parameter: PythonParameter): string {
        parameter.validate();
        try {
            const command =
                parameter.pythonBinaryPath + PYTHON_COMPILER +
                parameter.filePath;
            return command;
        } catch (err) {
            throw new CommandException('Error building python command.', 460, 'SAB-7788');
        }
    }
}

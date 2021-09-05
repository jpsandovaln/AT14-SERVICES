import path from 'path';
import { CommandException } from '../../common/exception/command_exception';
import { Command } from './command';
import { JavaParameter } from '../parameter/java_parameter';

const JAVA_COMPILER = 'javac ';
const JAVA_EXECUTE = 'java ';
const JAVA_CP_PARAM = '-cp ';
const JAVA_AND = ' && ';
const JAVA_SPACE = ' ';

export class JavaCommand implements Command {
    public build(parameter: JavaParameter): string {
        parameter.validate();
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
            throw new CommandException('Error building java command.', 460, 'SAB-7788');
        }
    }
}

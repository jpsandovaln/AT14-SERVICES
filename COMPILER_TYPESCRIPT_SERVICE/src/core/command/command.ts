import { JavaParameter } from "../parameter/java_parameter";
import { PythonParameter } from "../parameter/python_parameter";

export interface Command {
    build(parameter: JavaParameter | PythonParameter): string;
}

import { exec } from "child_process";
import { ExecuteException } from '../../common/exception/execute_exception';
import { Executer } from "./executer";

export class ExecuteWin implements Executer {
    public run(command: string) : Promise<object> {
        return new Promise((resolve, reject) => {
            exec(command, (err, stdout, stderr) => {
                if (err) {
                    throw new ExecuteException('execute error.');
                }
                resolve({ stdout });
            });
        });
    }
}

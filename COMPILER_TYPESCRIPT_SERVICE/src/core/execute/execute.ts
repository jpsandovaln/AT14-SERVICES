import { exec } from "child_process";
import { throwable } from 'ts-throwable'
import { ExecuteException } from '../../common/exception/execute_exception';

export class Execute {
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

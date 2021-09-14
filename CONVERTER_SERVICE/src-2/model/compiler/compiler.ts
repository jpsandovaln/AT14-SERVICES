import { exec } from 'child_process';

export class Compiler {
    constructor() {}

    execute(command: any) {
        return new Promise(function (resolve, reject) {
            exec(command, (err: any, stdout: any, stderr: any) => {
                if (err) {
                    reject(err);
                }
                resolve({ success: true });
            });
        });
    }
}
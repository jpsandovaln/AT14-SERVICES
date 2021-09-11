import { exec } from 'child_process';

export class Compiler {
    constructor() {}

    execute(command: string): Promise<any> {
        return new Promise(async function (resolve, reject) {
            exec(command, (err, stdout, stderr) => {
                if (err) {
                    reject(err);
                }
                resolve({ success: true });
            });
        });
    }
}

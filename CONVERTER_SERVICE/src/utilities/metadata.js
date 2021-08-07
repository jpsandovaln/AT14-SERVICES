const { exec } = require("child_process");
const { stdout, stderr } = require("process");


function returnMetadata(executablePathMetadata, filePath) {
    const SPACE = " ";
    const command =
        executablePathMetadata +
        SPACE +
        filePath
    return command;
}

function execute(command) {
    new Promise(function (resolve, reject) {
        exec(command, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            }
            resolve({ stdout });
            console.log(stdout);
        });
    });
}

async function fetching(command) {
    return await execute(command);
}

const { exec } = require("child_process");
const { stdout, stderr } = require("process");

returnMetadata=> {
    const SPACE = " ";
    const command =
        executablePathMetadata +
        SPACE +
        filePath
    return command;
}

execute => {
    new Promise(function (resolve, reject) {
        exec(command, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            }
            resolve({ stdout });s
            console.log(stdout);
        });
    });
}

const fetchingMetadata = async () =>{
    return await execute(command);
}

module.exports = {fetchingMetadata};

const { exec } = require("child_process");
const { stdout, stderr } = require("process");
const path = require("path");

function returnMetadata(executablePathMetadata, filePath, nameFile, outputPath) {
    const SPACE = " ";
    const ARROW = " > ";
    const command =
        executablePathMetadata +
        SPACE +
        filePath +
        ARROW + 
        outputPath + 
        path.parse(nameFile).name + ".txt";
    return command;    
}

function execute(command) {
    return new Promise(function (resolve, reject) {
        exec(command, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            }
            resolve({ stdout });
        });
    });
}

async function fetching(executablePathMetadata, filePath, nameFile, outputPath) {
    await execute(returnMetadata(executablePathMetadata, filePath, nameFile, outputPath));
    return outputPath + path.parse(nameFile).name + ".txt"; 
}

module.exports = {
    fetching
};

import { exec } from "child_process";
import path from "path";

function returnMetadata(
    executablePathMetadata: string,
    filePath: string,
    nameFile: string,
    outputPath: string
) {
    const SPACE = " ";
    const ARROW = " > ";
    const command =
        executablePathMetadata +
        SPACE +
        filePath +
        ARROW +
        outputPath +
        path.parse(nameFile).name +
        ".txt";
    return command;
}

function execute(command: any) {
    return new Promise(function (resolve, reject) {
        exec(command, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            }
            resolve({ stdout });
        });
    });
}

export async function fetching(
    executablePathMetadata: any,
    filePath: any,
    nameFile: any,
    outputPath: any
) {
    await execute(
        returnMetadata(executablePathMetadata, filePath, nameFile, outputPath)
    );
    return outputPath + path.parse(nameFile).name + ".txt";
}

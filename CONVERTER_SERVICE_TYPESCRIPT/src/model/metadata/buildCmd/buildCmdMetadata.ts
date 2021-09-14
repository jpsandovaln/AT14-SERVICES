const SPACE = ' ';
const ARROW = ' > ';
const EXTENSION = '.txt'
export class BuildCmdMetadata {     
    
    constructor() { }

    returnCmd(codecPath: string, filePath: string, outputPath: string, resultName: string): string {
        const command = codecPath + SPACE + filePath + ARROW + outputPath + resultName + EXTENSION;        
        return command;
    }
}
import fs from 'fs';

export interface Download {
    download: Function;  
    loadFile(filePath: string): fs.ReadStream;
}
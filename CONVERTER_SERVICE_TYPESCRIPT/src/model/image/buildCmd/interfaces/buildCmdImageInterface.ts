export interface IBuildCmdImage {
    getCodecPath(): string;
    setCodecPath(codecPath: string): void;
    getImagePath(): string;
    setImagePath(codecPath: string): void;
    getOutputPath(): string;
    setOutputPath(codecPath: string): void;
    getResultName(): string;
    setResultName(codecPath: string): void;
}

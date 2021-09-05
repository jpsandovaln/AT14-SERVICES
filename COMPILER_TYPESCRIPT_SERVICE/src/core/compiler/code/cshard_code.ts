import { ExternalLibrary } from "./external_library";

export class CShardCode {
    runCode(fileCode: string) {
        const external: ExternalLibrary = new ExternalLibrary();
        const result = external.addFile(fileCode).execute();
        return result;
    }
}

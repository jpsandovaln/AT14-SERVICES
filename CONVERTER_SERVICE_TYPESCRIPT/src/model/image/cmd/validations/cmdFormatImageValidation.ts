export class VCmdFormatImage {
    validateFormat(format: string | undefined): boolean {
        if ((format = ".jpg" || ".jpeg" || ".gif" || ".png" || ".bmp"))
            return true;
        else return false;
    }
}

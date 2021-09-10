export class Property {
    private static isValid(process_env: any): string {
        if (process_env != undefined) 
            return process_env;
        else            
            return "";        
    }

    static getFFmpegPath(): string {
        return this.isValid(process.env.FFMPEG_PATH);
    }

    static getExifToolPath(): string {
        return this.isValid(process.env.EXIFTOOL_PATH);
    }

    static getMagickPath(): string {
        return this.isValid(process.env.MAGICK_PATH);
    }

    static getUploadPath(): string {
        return this.isValid(process.env.UPLOAD_PATH);
    }

    static getOutputPath(): string {
        return this.isValid(process.env.OUTPUT_PATH);
    }

    static getImagePath(): string {
        return this.isValid(process.env.IMAGE_PATH);
    }

    static getVideoPath(): string {
        return this.isValid(process.env.VIDEO_PATH);
    }

    static getAudioPath(): string {
        return this.isValid(process.env.AUDIO_PATH);
    }

    static getZipPath(): string {
        return this.isValid(process.env.ZIP_PATH);
    }

    static getPort(): string {
        return this.isValid(process.env.PORT_CONVERTER);
    }
    
    static getBaseUrl(): string {
        return this.isValid(process.env.BASE_URL_CONVERTER);
    }

    static getDBValidation(): string {
        return this.isValid(process.env.DATA_BASE_VALIDATION);
    }
}

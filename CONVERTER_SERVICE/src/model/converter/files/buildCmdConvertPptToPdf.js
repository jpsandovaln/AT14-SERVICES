/**
 * @Class
 * Build a string that is the command to convert a Ppt file to an image.
 */
class BuildCmdConvertPptToPdf {
    /**
     * @param {string} executablePathConverterPpt The path where the executable converter is.
     * @param {string} pptPathConvert The ppt path where the file is.
     * @param {string} outputPathConverted The path where the converted file will be out.
     */

    returnCommand(
        executablePathConverterPpt,
        pptPathConvert,
        outputPathConverted
    ) {
        const MAGICK_SPACE = " ";
        const officeShowed = "--headless";
        const converterFunction = "--convert-to";
        const convertTo = "pdf";
        const functionOut = "--outdir";
        const command =
            executablePathConverterPpt +
            MAGICK_SPACE +
            officeShowed +
            MAGICK_SPACE +
            converterFunction +
            MAGICK_SPACE +
            convertTo +
            MAGICK_SPACE +
            pptPathConvert +
            MAGICK_SPACE +
            functionOut +
            MAGICK_SPACE +
            outputPathConverted;
        return command;
    }
}
module.exports = BuildCmdConvertPptToPdf;

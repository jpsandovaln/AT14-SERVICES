/**
 * @Class
 * Build a string that is the command to add the option of change quality to the image.
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
        //outputFormat
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
/*const Compiler = require("../../compiler");
const compiler = new Compiler();

const CommandConvertPptToPdf = new BuildCmdConvertPptToPdf();
const executablePathConverterPpt =
    "D:/usuario/Desktop/fundacion_jala/prog101/Proyecto/AT14-SERVICES/CONVERTER_SERVICE/src/model/converter/files/thirdParty/LibreOffice/program/swriter.exe";
const pptPathConvert = "D:/usuario/Desktop/Programacion_funcional.pptx";
const outputPathConverted = "D:/usuario/Desktop/converted/";
//const outputFormat = ".pdf";

compiler.execute(
    CommandConvertPptToPdf.returnCommand(
        executablePathConverterPpt,
        pptPathConvert,
        outputPathConverted
    )
);
/*compiler.execute(
    "D:/usuario/Desktop/fundacion_jala/prog101/Proyecto/AT14-SERVICES/CONVERTER_SERVICE/src/model/converter/files/thirdParty/LibreOffice/program/swriter.exe --headless --convert-to pdf D:/usuario/Desktop/Programacion_funcional.pptx --outdir D:/usuario/Desktop/converted/"
);*/

const Compiler = require("../../model/compiler");
const CommandBuilder = require("./CommandBuilder")

require("dotenv").config("../../.env");

const magickPath = process.env.CONVERTER_PATH;
const outputPath = process.env.OUTPUT_PATH;


const Convert = async (req, res) => {

    const compiler = new Compiler();
    const commandBuilder = new CommandBuilder();

    compiler.execute(magickPath + " " + outputPath + "1.jpg " + commandBuilder.createCommand({ resizeImage: 500, rotateImage: 60 }) + " " + outputPath + "2.jpg");
};

Convert();

module.exports = Convert;

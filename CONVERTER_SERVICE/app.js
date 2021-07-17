const BuildCmdObtainFrames = require('../buildCmdObtainFrames');
//const BuildCmdChangeImageFormat = require('./buildCmdChangeImageFormat');
const Compiler = require('./compiler');

const compiler = new Compiler();

const commandObtainFrames = new BuildCmdObtainFrames ();
const codecPath = "C:/Users/Usuario/Desktop/ffmpeg/ffmpeg.exe";
const videoPath = "C:/Users/Usuario/Desktop/ffmpeg/No_te_olvides.mp4";
const outputPath = "C:/Users/Usuario/Desktop/ffmpeg/";
console.log(commandObtainFrames.returnCommand(codecPath, videoPath, outputPath, '1', '.bmp')); 

/*const commandChangeImageFormat = new BuildCmdChangeImageFormat();
const executablePath = 'C:/Users/Usuario/Desktop/ffmpeg/magick.exe';
const imagePath = "C:/Users/Usuario/Desktop/ffmpeg/image.png";
const outputImagePath = "C:/Users/Usuario/Desktop/ffmpeg/imagen.jpg";
compiler.execute(commandChangeImageFormat.returnCommand(executablePath, imagePath, outputImagePath));*/
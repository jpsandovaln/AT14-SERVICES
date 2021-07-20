const BuildCmdImageChangeToGrayscale = require('./IMAGES_CONVERTER/CONVERT/buildCmdImageChangeToGrayscale')
const BuildCmdChangeVideoFormat = require('./src/model/converter/video/buildCmdChangeVideoFormat');
const BuildCmdObtainAudio = require('./VIDEO_CONVERTER/FFMPEG/buildCmdObtainAudio');
const BuildCmdRotateVideo = require('./VIDEO_CONVERTER/FFMPEG/buildCmdRotateVideo');
const BuildCmdHInvertVideo = require('./VIDEO_CONVERTER/FFMPEG/buildCmdHInvertVideo');
const BuildCmdVInvertVideo = require('./VIDEO_CONVERTER/FFMPEG/buildCmdVInvertVideo');

const Compiler = require('./compiler');

const compiler = new Compiler();

const commandObtainFrames = new BuildCmdObtainFrames ();
const commandChangeVideoFormat = new BuildCmdChangeVideoFormat();
const commandObtainAudio = new BuildCmdObtainAudio();
const commandRotateVideo = new BuildCmdRotateVideo();
const commandHInvertVideo = new BuildCmdHInvertVideo();
const commandVInvertVideo = new BuildCmdVInvertVideo();

const codecPath = "C:/Users/Usuario/Desktop/ffmpeg/ffmpeg.exe";
const videoPath = "C:/Users/Usuario/Desktop/ffmpeg/No te olvides.mp4";
const outputPath = "C:/Users/Usuario/Desktop/ffmpeg/";
//compiler.execute(commandObtainFrames.returnCommand(codecPath, videoPath, outputPath, '1', '.bmp'));
//compiler.execute(commandChangeVideoFormat.returnCommand(codecPath, videoPath, outputPath, undefined, undefined, undefined, '.mov'));
//compiler.execute(commandChangeVideoFormat.returnCommand(codecPath, videoPath, outputPath, '3', '320x240', '0', '.flv'));
//compiler.execute(commandObtainAudio.returnCommand(codecPath, videoPath, outputPath));
//compiler.execute(commandRotateVideo.returnCommand(codecPath, videoPath, outputPath, '180'));
//compiler.execute(commandHInvertVideo.returnCommand(codecPath, videoPath, outputPath));
//compiler.execute(commandVInvertVideo.returnCommand(codecPath, videoPath, outputPath));

const BuildCmdObtainFrames = require('./VIDEO_CONVERTER/FFMPEG/buildCmdObtainFrames');
const BuildCmdChangeImageFormat = require('./IMAGES_CONVERTER/IMAGEMAGICK/buildCmdChangeImageFormat');
const BuildCmdChangeImageResize = require('./IMAGES_CONVERTER/CONVERT/buildCmdChangeImageResize');
const BuildCmdChangeImageQuality = require('./IMAGES_CONVERTER/CONVERT/buildCmdChangeImageQuality');
const BuildCmdChangeImageDirection = require('./IMAGES_CONVERTER/CONVERT/buildCmdChangeImageDirection');
const BuildCmdChangeImageColorMonochrome = require('./IMAGES_CONVERTER/CONVERT/buildCmdChangeImageMonochrome')
const BuildCmdChangeImagePaint = require('./IMAGES_CONVERTER/CONVERT/buildCmdChangeImagePaint')
const BuildCmdChangeImageDoubling = require('./IMAGES_CONVERTER/CONVERT/buildCmdChangeImageDoubling')
const BuildCmdImageChangeToGrayscale = require('./IMAGES_CONVERTER/CONVERT/buildCmdImageChangeToGrayscale')
const BuildCmdChangeVideoFormat = require('./VIDEO_CONVERTER/FFMPEG/buildCmdChangeVideoFormat');
const BuildCmdObtainAudio = require('./VIDEO_CONVERTER/FFMPEG/buildCmdObtainAudio');
const BuildCmdRotateVideo = require('./VIDEO_CONVERTER/FFMPEG/buildCmdRotateVideo');
const BuildCmdHInvertVideo = require('./VIDEO_CONVERTER/FFMPEG/buildCmdHInvertVideo');
const BuildCmdVInvertVideo = require('./VIDEO_CONVERTER/FFMPEG/buildCmdVInvertVideo');

const Compiler = require('./compiler');

const compiler = new Compiler();


/*
const commandChangeImageFormat = new BuildCmdChangeImageFormat();
const executablePathMagick = 'C:/Users/mile_/OneDrive/Escritorio/Ejecutables/magick.exe';
const imagePathChangeFormat = 'C:/Users/mile_/OneDrive/Escritorio/Images/TheDarkSideOfTheMoon.bmp';
const outputImagePath = 'C:/Users/mile_/OneDrive/Escritorio/Images/';
compiler.execute(commandChangeImageFormat.returnCommandToConverterImages(executablePathMagick, imagePathChangeFormat, outputImagePath, '.png'));

const commandChangeImageResize = new BuildCmdChangeImageResize();
const executablePathConvert = 'C:/Users/mile_/OneDrive/Escritorio/Ejecutables/convert.exe';
const imagePathResize = 'C:/Users/mile_/OneDrive/Escritorio/Images/TheWall.jpg';
const outputImagePathResize = 'C:/Users/mile_/OneDrive/Escritorio/Images/';
compiler.execute(commandChangeImageResize.returnCommandToResizeImages(executablePathConvert, imagePathResize, outputImagePathResize, '150x100', '.png'));

const commandChangeImageQuality = new BuildCmdChangeImageQuality();
const executablePathConverterQuality = 'C:/Users/mile_/OneDrive/Escritorio/Ejecutables/convert.exe';
const imagePathChangeQuality = 'C:/Users/mile_/OneDrive/Escritorio/Images/TheDivisionBell.gif';
const outputPathQuality = 'C:/Users/mile_/OneDrive/Escritorio/Images/';
compiler.execute(commandChangeImageQuality.returnCommandToChangesQualityImages(executablePathConverterQuality, imagePathChangeQuality, outputPathQuality, '85', '.gif'));

const commandChangeImageDirection = new BuildCmdChangeImageDirection();
const executablePathRotate = 'C:/Users/mile_/OneDrive/Escritorio/Ejecutables/convert.exe';
const imagePathRotate = 'C:/Users/mile_/OneDrive/Escritorio/Images/AtomHeartMother.png';
const outputPathRotate = 'C:/Users/mile_/OneDrive/Escritorio/Images/';
compiler.execute(commandChangeImageDirection.returnCommandToRotateImages(executablePathRotate, imagePathRotate, outputPathRotate, '90', '.png'));

const commandChangeColorMonochrome = new BuildCmdChangeImageColorMonochrome();
const executablePathMonochrome = 'C:/Users/mile_/OneDrive/Escritorio/Ejecutables/convert.exe';
const imagePathMonochrome = 'C:/Users/mile_/OneDrive/Escritorio/Images/TheFinalCut.jpg';
const outputPathMonochrome = 'C:/Users/mile_/OneDrive/Escritorio/Images/';
compiler.execute(commandChangeColorMonochrome.returnCommandToChangeImageColorMonochrome(executablePathMonochrome, imagePathMonochrome, outputPathMonochrome, '.jpg'));

const commandChangePaint = new BuildCmdChangeImagePaint();
const executablePathPaint = 'C:/Users/mile_/OneDrive/Escritorio/Ejecutables/convert.exe';
const imagePathPaint = 'C:/Users/mile_/OneDrive/Escritorio/Images/More.jpg';
const outputPathPaint = 'C:/Users/mile_/OneDrive/Escritorio/Images/';
compiler.execute(commandChangePaint.returnCommandToChangeImagePaint(executablePathPaint, imagePathPaint, '1', outputPathPaint,'.jpg'));

const commandChangeDoubling = new BuildCmdChangeImageDoubling();
const executablePathDoubling = 'C:/Users/mile_/OneDrive/Escritorio/Ejecutables/convert.exe';
const imagePathDoubling = 'C:/Users/mile_/OneDrive/Escritorio/Images/SeeEmily.jpg';
const outputPathDoubling = 'C:/Users/mile_/OneDrive/Escritorio/Images/';
compiler.execute(commandChangeDoubling.returnCommandToChangeImageDoubling(executablePathDoubling, imagePathDoubling, '130x100' , outputPathDoubling, '.jpg'));

const commandToImageChangeToGrayscale = new BuildCmdImageChangeToGrayscale();
const executablePathGrayScale = 'C:/Users/mile_/OneDrive/Escritorio/Ejecutables/convert.exe';
const imagePathGrayscale = 'C:/Users/mile_/OneDrive/Escritorio/Images/ThePiperAtTheGatesOfDawn.jpg';
const outputPathGrayscale = 'C:/Users/mile_/OneDrive/Escritorio/Images/';
compiler.execute(commandToImageChangeToGrayscale.returnCommandToChangeImageToGrayscale(executablePathGrayScale, imagePathGrayscale, outputPathGrayscale, '.jpg'));
*/

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
//compiler.execute(commandChangeVideoFormat.returnCommand(codecPath, videoPath, outputPath, undefined, undefined, undefined, '.flv'));
//compiler.execute(commandObtainAudio.returnCommand(codecPath, videoPath, outputPath));
//compiler.execute(commandRotateVideo.returnCommand(codecPath, videoPath, outputPath, '180'));
//compiler.execute(commandHInvertVideo.returnCommand(codecPath, videoPath, outputPath));
//compiler.execute(commandVInvertVideo.returnCommand(codecPath, videoPath, outputPath));

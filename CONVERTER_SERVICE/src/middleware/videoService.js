const BuildCmdChangeVideoFormat = require('../model/converter/video/buildCmdChangeVideoFormat');
const BuildCmdObtainFrames = require('../model/converter/video/buildCmdObtainFrames');
const BuildCmdObtainAudio = require('../model/converter/video/buildCmdObtainAudio');
const Compiler = require('../model/compiler');
const path = require("path");
var fs = require('fs');
require("dotenv").config("../../.env");
const Md5File = require("../utilities/checksum");

const codecPath = process.env.CONVERTER_PATH;
const uploadPath = process.env.UPLOAD_PATH;
const videoPath = process.env.VIDEO_PATH;
const audioPath = process.env.AUDIO_PATH;
const zipPath = process.env.ZIP_PATH;

class VideoServices {
    constructor(body, nameFile) {
        this.body = body;
        this.compiler = new Compiler();
        this.nameFile = nameFile;
        this.filePath = uploadPath + nameFile;
        this.outputFormat = body.outputFormat;
    }

    paramObtainFrames() {
        var paramFrames = {
            frameScale:(this.body.frameScale != undefined ? this.body.frameScale : "320"),
            grayScale: (this.body.grayScale != undefined ? this.body.grayScale : "false"),
            timeBetweenFrames: (this.body.timeBetweenFrames != undefined ? this.body.timeBetweenFrames : "1"),
            framesFormat: (this.body.framesFormat != undefined ? this.body.framesFormat : ".jpg")
        };       
        return paramFrames;
    }

    paramVideoFormat() {
        var paramVideoFormat = {
            ratio: (this.body.ratio != undefined ? this.body.ratio : undefined),
            scale: (this.body.scale != undefined ? this.body.scale : undefined),
            quality: (this.body.quality != undefined ? this.body.quality : '0'),
            angle: (this.body.angle != undefined ? this.body.angle : undefined),
            vflip: (this.body.vflip != undefined ? this.body.vflip : undefined),
            hflip: (this.body.hflip != undefined ? this.body.hflip : undefined),
        };
        return paramVideoFormat;
    }

    changeVideoFormat() {
        const cmdVideoFormat = BuildCmdChangeVideoFormat.returnCommand(codecPath, this.filePath, this.paramVideoFormat(), videoPath, this.outputFormat);
        this.compiler.execute(cmdVideoFormat);
        const resultPathVideoFormat = videoPath + path.parse(this.nameFile).name + this.outputFormat;
        return resultPathVideoFormat;
    }
   
    obtainFrames() {
        if(this.body.obtainFrames == 'true') {
            const dir = zipPath + path.parse(this.nameFile).name;
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            }
            const cmdObtainFrames = BuildCmdObtainFrames.returnCommand(codecPath, this.filePath, this.paramObtainFrames(), dir + "/");
            this.compiler.execute(cmdObtainFrames);
            return dir + "/";
        }        
        else
            return "";
    }   
    
    obtainAudio() {
        if(this.body.obtainAudio == 'true') {
            const cmdObtainAudio = BuildCmdObtainAudio.returnCommand(codecPath, this.filePath, audioPath);
            this.compiler.execute(cmdObtainAudio);    
            const resultPathAudio = audioPath + path.parse(this.nameFile).name + ".mp3";
            return resultPathAudio;
        }        
        else 
            return "";
    }  
}

module.exports = VideoServices;
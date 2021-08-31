const BuildCmdChangeVideoFormat = require('../model/converter/video/buildCmdChangeVideoFormat');
const BuildCmdObtainFrames = require('../model/converter/video/buildCmdObtainFrames');
const BuildCmdObtainAudio = require('../model/converter/video/buildCmdObtainAudio');
const Compiler = require('../model/compiler');
const path = require("path");
var fs = require('fs');
require("dotenv").config("../../.env");
const codecPath = process.env.CONVERTER_PATH;
const uploadPath = process.env.UPLOAD_PATH;
const videoPath = process.env.VIDEO_PATH;
const audioPath = process.env.AUDIO_PATH;
const zipPath = process.env.ZIP_PATH;

class VideoServices {
    constructor(body, nameFile, resultName) {
        this.body = body;
        this.compiler = new Compiler();
        this.nameFile = nameFile;
        this.resultName = resultName;
        this.filePath = uploadPath + nameFile;
        this.outputFormat = body.outputFormat;
    }

    paramObtainFrames() {
        var paramFrames = {
            frameScale:(this.body.frameScale != undefined && this.body.frameScale != ""? this.body.frameScale : "320"),
            grayScale: (this.body.grayScale != undefined && this.body.grayScale != ""? this.body.grayScale : "false"),
            timeBetweenFrames: (this.body.timeBetweenFrames != undefined && this.body.timeBetweenFrames != ""? this.body.timeBetweenFrames : "1"),
            framesFormat: (this.body.framesFormat != undefined && this.body.framesFormat != ""? this.body.framesFormat : ".jpg")
        };       
        return paramFrames;
    }

    paramVideoFormat() {
        var paramVideoFormat = {
            ratio: (this.body.ratio != undefined && this.body.ratio != "" ? this.body.ratio : undefined),
            scale: (this.body.scale != undefined && this.body.scale != ""? this.body.scale : undefined),
            quality: (this.body.quality != undefined && this.body.quality != ""? this.body.quality : '0'),
            angle: (this.body.angle != undefined && this.body.angle != ""? this.body.angle : undefined),
            vflip: (this.body.vflip != undefined && this.body.vflip != ""? this.body.vflip : undefined),
            hflip: (this.body.hflip != undefined && this.body.hflip != ""? this.body.hflip : undefined),
        };
        return paramVideoFormat;
    }

    async changeVideoFormat() {
        const cmdVideoFormat = BuildCmdChangeVideoFormat.returnCommand(codecPath, this.filePath, this.resultName, this.paramVideoFormat(), videoPath, this.outputFormat);
        await this.compiler.execute(cmdVideoFormat);
        const resultPathVideoFormat = videoPath + this.resultName + this.outputFormat;
        return resultPathVideoFormat;
    }

    async obtainFrames() {
        if(this.body.obtainFrames == 'true') {
            const dir = zipPath + this.resultName;
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            }
            const cmdObtainFrames = BuildCmdObtainFrames.returnCommand(codecPath, this.filePath, this.paramObtainFrames(), dir + "/");
            await this.compiler.execute(cmdObtainFrames);
            return dir;
        }        
        else
            return "";
    }   
    
    async obtainAudio() {
        if(this.body.obtainAudio == 'true') {
            const cmdObtainAudio = BuildCmdObtainAudio.returnCommand(codecPath, this.filePath, this.resultName, audioPath);
            await this.compiler.execute(cmdObtainAudio);    
            const resultPathAudio = audioPath + this.resultName + ".mp3";
            return resultPathAudio;
        }        
        else 
            return "";
    }  
}

module.exports = VideoServices;
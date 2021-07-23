const express = require('express');
const multer = require('multer');
const fs = require('fs');
require('dotenv').config({ path: '../.env'});


const FfmpegCommand= require('../model/converter/video/buildCmdObtainFrames');
const Compiler= require('../model/converter/compiler');
//const FfmpegParameter= require('../model/converter/ffmpeg_parameter');
const output= '../output';

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = '../upload/';
        fs.mkdirSync(path, { recursive: true});
        cb(null, path);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    } 
});

const upload = multer({ storage: storage });

app.post('/compiler', upload.single('file'), async (req, res) => {
    const ffmpegCommand = new FfmpegCommand();
    //console.info(process.env.EXECUTE_FFMPEG);
    //const ffmpegParameter = new FfmpegParameter('C:/Users/ryzyn/Desktop/ffmepg/ffmpeg.exe','C:/Users/ryzyn/Desktop/ffmepg/canto.mp4','C:/Users/ryzyn/Desktop/ffmepg/' );
    const command = ffmpegCommand.returnCommand('C:/Users/ryzyn/Desktop/ffmepg/ffmpeg.exe',req.file.path,output, '1',  '.jpg');
    console.info(command);
    const compiler = new Compiler();
    const result = await compiler.execute(command);
    console.info(result);
    res.send(result);
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.info('server running...'));

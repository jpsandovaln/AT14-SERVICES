const CmdRatio = require("./cmdRatio");
const CmdScale = require("./cmdScale");
const CmdQuality = require("./cmdQuality");
const CmdFlipRotate = require("./cmdFlipRotate");

/**
 * @Class
 * Build a string command for change the number of images per minute.
 */
class Cmd {
    constructor() { }

    static returnCommand(params) {
        let cmd = "";
        cmd = cmd + CmdRatio.returnCommand(params.ratio);
        cmd = cmd + CmdScale.returnCommand(params.scale);
        cmd = cmd + CmdQuality.returnCommand(params.quality);
        cmd = cmd + CmdFlipRotate.returnCommand(params.angle, params.vflip, params.hflip);
        return cmd;
    }
}

module.exports = Cmd;
/*
var objetos = { 
                ratio : "5",
                scale : "340x260",
                quality : "10",
                angle : "270",
                vflip : true,
                hflip : true
            }

console.log(Cmd.returnCommand(objetos));*/
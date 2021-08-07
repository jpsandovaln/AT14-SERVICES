const CmdRatio = require("./cmdRatio");
const CmdScale = require("./cmdScale");
const CmdQuality = require("./cmdQuality");
const CmdFlipRotate = require("./cmdFlipRotate");
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

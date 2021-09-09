import { Parameters } from "../../../common/parameter/parameters";
import { Vf } from "./vf";
import { CmdFrames } from "./vfFrames";
import { CmdGrayScale } from "./vfGreyScale";
import { CmdHFlip } from "./vfHFlip";
import { CmdRotate } from "./vfRotate";
import { CmdScale } from "./vfScale";
import { CmdVFlip } from "./vfVFlip";

export class VfFactory {
    static getInstance(typeCommand: string, params: Parameters) : Vf {
        if (typeCommand === "buildChangeFormat") {
            let vfRotate = new CmdRotate(params);
            let vfVflip = new CmdVFlip(params);
            let vfHflip = new CmdHFlip(params);
            let vfGreyScale = new CmdGrayScale(params);
            vfRotate.setNextCommand(vfVflip);
            vfVflip.setNextCommand(vfHflip);
            vfHflip.setNextCommand(vfGreyScale);
            return vfRotate;
        }
        if (typeCommand === "buildObtainFrames") {
            let vfScale = new CmdScale(params);
            let vfFrames = new CmdFrames(params);
            let vfGreyScale = new CmdGrayScale (params);
            vfScale.setNextCommand(vfFrames);
            vfFrames.setNextCommand(vfGreyScale);            
            return vfScale;
        }
        throw new Error("Invalid Operation");
    }
}


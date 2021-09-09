import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";
import { CmdRotate } from "./cmdVF/vfRotate";
import { DeleteCommas } from "./cmdVF/deleteCommas";
import { VfFactory } from "./cmdVF/vfFactory";

const VF = '-vf';
const QUOTES = '"';
const SPACE = " ";

export class CmdVF extends Command {   
    private cmd!: Command;
    private typeCommand: string;
    constructor(parameters: Parameters, typeCommand: string) { 
        super(parameters);        
        this.typeCommand = typeCommand;
    }

    setNextCommand(command: Command):void {
        this.cmd = command;
    };

    returnCommand(command: string): string {  
        let cmdVF = VfFactory.getInstance(this.typeCommand, this.getParameters());
        let commandVF = cmdVF.returnCommand("");
        if(commandVF != "")
            command = command + VF + SPACE + QUOTES + DeleteCommas.delCommas(commandVF) + QUOTES + SPACE
        return this.cmd.returnCommand(command);               
    };    
}

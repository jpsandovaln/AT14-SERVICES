import { Parameters } from "../../common/parameter/parameters";
import { Command } from "./cmd";

const SS_TEMPORARY_START = '-ss';
const DEFAULT_TEMPORARY_START = '00:00:01';
const SPACE = ' ';

export class CmdTemporaryStart extends Command {   
    private cmd!: Command;
    constructor(parameters: Parameters) { 
        super(parameters);        
    }

    setNextCommand(command: Command):void {
        this.cmd = command;
    };

    returnCommand(command: string): string {  
        if(this.getParameter('temporaryStart') != undefined) {
            command = command + SS_TEMPORARY_START + SPACE + this.getParameter('temporaryStart') + SPACE;            
        }
        else {
            command = command + SS_TEMPORARY_START + SPACE + DEFAULT_TEMPORARY_START + SPACE;
        }        
        return this.cmd.returnCommand(command);            
    };    
}

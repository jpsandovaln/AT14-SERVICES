import { Compiler } from "../../../model/common/compiler/compiler";
import { Parameters } from "../../../model/common/parameter/parameters";
import { Property } from "../../../utilities/property";
var fs = require('fs');
export abstract class Service{
    public params: Parameters;
    public compiler: Compiler;
    public resultName: string;
    public filePath: string; 
    
    constructor(json: object, nameFile: string, resultName: string) {
        this.params = new Parameters(json);
        this.compiler = new Compiler();
        this.resultName = resultName;
        this.filePath = Property.getUploadPath() + nameFile;        
    }

    abstract resultPath(): any;
}
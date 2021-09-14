
export class Parameters {
    mapJson: Map<string, string> = new Map();
    
    constructor(JSonBody: object) {
        this.mappingJson(JSonBody);
    }
    
    private mappingJson(Json: any): void {
        for (let clave in Json){
            this.mapJson.set(clave, Json[clave]);
        }
    }

    getParameter(key: string | undefined): string | undefined{
        if(key != undefined)
            return this.mapJson.get(key);
        else 
            return undefined;
    }
}    


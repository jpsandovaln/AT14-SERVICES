
export class Parameters {
    public JSonBody: object;
    
    constructor(JSonBody: object) {
        this.JSonBody = JSonBody;
    }
    
    public getJSon(): object {
        return this.JSonBody;
    }

    public getParameter(key: string): string {
        return this.getJSon()[key];
    } 
}    
/*
let params = new Parameters({ ratio: '10', scale: '20', quality: '30', vflip: 'true', hflip: 'false'});
console.log(params.getParameter('ratio'));*/

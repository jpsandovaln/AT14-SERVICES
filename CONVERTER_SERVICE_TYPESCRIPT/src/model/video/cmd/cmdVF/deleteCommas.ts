export class DeleteCommas{
    constructor() {}
    
    static delCommas(chain: string): string{
        if(chain.charAt(0) == ',')
            chain = chain.substring(1);
        if(chain.charAt(chain.length - 1) == ',')
            chain = chain.substring(0, chain.length - 1);
        return chain;
    }    
}

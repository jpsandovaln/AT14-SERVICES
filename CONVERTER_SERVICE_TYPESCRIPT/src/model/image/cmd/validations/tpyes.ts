export class Types {
    isNumber(value: any): boolean {
        return typeof parseInt(value) == "number" ? true : false;
    }
    isBoolean(value: any): boolean {
        return typeof JSON.parse(value) == "boolean" ? true : false;
    }
}

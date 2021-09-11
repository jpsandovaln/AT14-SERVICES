export class Limits {
    private MIN_VALUE: number;
    private MAX_VALUE: number;

    constructor(min: number, max: number) {
        this.MIN_VALUE = min;
        this.MAX_VALUE = max;
    }
    isValid(value: any): boolean {
        return value >= this.MIN_VALUE && value <= this.MAX_VALUE
            ? true
            : false;
    }
}

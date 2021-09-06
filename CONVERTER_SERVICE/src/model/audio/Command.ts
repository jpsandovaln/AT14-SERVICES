export class Command {
    private id: string;
    private value: any;

    constructor(id: string, value: any) {
        this.id = id;
        this.value = value;
    }

    public getId() {
        return this.id;
    }
    public setId(id: string) {
        this.id = id;
    }

    public getValue() {
        return this.value;
    }
    public setValue(value: any) {
        this.value = value;
    }
}
export class TypeDetector {
    detectType(value: any) {
        if (
            value === null ||
            value === undefined ||
            value === "" ||
            value == false ||
            value === 0
        ) {
            return false;
        } else {
            return true;
        }
    }
}

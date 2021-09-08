"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeDetector = void 0;
class TypeDetector {
    detectType(value) {
        if (value === null ||
            value === undefined ||
            value === "" ||
            value == false ||
            value === 0) {
            return false;
        }
        else {
            return true;
        }
    }
}
exports.TypeDetector = TypeDetector;

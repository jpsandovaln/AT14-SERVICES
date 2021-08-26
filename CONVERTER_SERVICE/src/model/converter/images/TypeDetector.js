class TypeDetector {
    detectType(value) {
        if (value === null || value === undefined || value === '' || value == false || value === 0) {
            return false;
        }
        else {
            return true;
        }
    }
}

module.exports = TypeDetector;

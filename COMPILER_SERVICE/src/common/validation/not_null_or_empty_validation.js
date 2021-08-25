const ValidateStrategy = require("./validate_strategy");
const ParameterInvalidException = require("../exception/parameter_exception");

class NotNullOrEmptyValidation extends ValidateStrategy {
    constructor(field, value) {
        super();
        this._field = field;
        this._value = value;
    }

    validate() {
        if (!this._value || this._value.trim().length === 0) {
            throw new ParameterInvalidException('Invalid data field: ' + this.field, 'SAB-0124587');
        }
    }
}

module.exports = NotNullOrEmptyValidation;

class Command {
    constructor() {
        if (this.constructor == Command) {
            throw new Error('Command abstract class cannot be instantiated');
        }
    }

    build(parameter) {
        throw new Error('build() must be implementrd');
    }
}

module.exports = Command;

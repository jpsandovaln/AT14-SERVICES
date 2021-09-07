import ApolloException from './apolloException.js';
class MongoConnectionException extends ApolloException {
    constructor(message, status, code) {
        super(message, status, code);
    }
}

export default MongoConnectionException;

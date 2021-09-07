class MongoConnectionException extends ApolloException {
    constructor(message, status, code) {
        super(message, status, code);
    }
}

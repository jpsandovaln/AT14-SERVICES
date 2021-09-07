import ApolloException from './apolloException.js';
class ResolverException extends ApolloException {
    constructor(message, status, code) {
        super(message, status, code);
    }
}

export default ResolverException;

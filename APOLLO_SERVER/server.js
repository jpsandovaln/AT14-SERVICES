const { ApolloServer} = require('apollo-server');
const {typeDefs} = require('./queries/queryOnly');
const {resolvers}= require('./resolvers/resolversOnly');

const server = new ApolloServer({ 
    typeDefs, 
    resolvers 
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

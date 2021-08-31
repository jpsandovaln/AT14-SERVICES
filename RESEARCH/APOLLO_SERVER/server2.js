const {ApolloServer, gql} = require('apollo-server');
import { GraphQLUpload } from 'graphql-upload';


const typeDefs = gql`
  scalar FileUpload

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    uploads: [File]
  }

  type Mutation {
    singleUpload(file: FileUpload!): File!
  }
`;

const resolvers = {
  FileUpload: GraphQLUpload,
  Query: {
    uploads: (parent, args) => {},
  },
  Mutation: {
    singleUpload: async (_, {file}) => {
      const {createReadStream, filename, mimetype, encoding} = await file;
      const stream = createReadStream();

      // Rest of your code: validate file, save in your DB and static storage

      return {filename, mimetype, encoding};
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});

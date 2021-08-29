import { gql } from 'apollo-server';

const typeDefs =  gql`
  scalar Upload
  type File {
    id: ID!
    filename: String!
    mimetype: String!
    path: String!
    name: String!
  }
  type Query {
    hello: String
    name: String
    files: [File!]
  }
  type Mutation {
    uploadFile(file: Upload!, name: String): File!
  }
`;

export default typeDefs;

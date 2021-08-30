import { gql } from 'apollo-server';

const typeDefs =  gql`
  scalar Upload
  type File {
    id: ID!
    filename: String!
    mimetype: String!
    path: String!
  }
  type FileML {
    id: ID!
    filename: String!
    mimetype: String!
    path: String!
    algorithm: String
    word: String
    percentage: String
    second: String
    pathImage: String
    searchWord: String
  }
  type Query {
    hello: String
    machines: [FileML]
    files: [File!]
  }
  type Mutation {
    uploadFile(file: Upload!, name: String): File!
    uploadFileML(searchWord: String, algorithm: String, percentage: String, file: Upload!): FileML!
  }
`;

export default typeDefs;

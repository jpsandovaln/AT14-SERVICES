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
    Algorithm: String
    Word: String
    Percentage: String
    Second: String
    PathImage: String
  }
  type VideoConverter {
    id: ID!
    filename: String!
    mimetype: String!
    path: String!
    Algorithm: String
    Word: String
    Percentage: String
    Second: String
    PathImage: String
    name: String!
    filePath: String!
  }
  type Query {
    hello: String
    machines: [FileML]
    VideoConverter: [VideoConverter]
    files: [File!]
  }
  type Mutation {
    uploadFile(file: Upload!, name: String): File!
    uploadFileML(searchWord: String, algorithm: String, percentage: String, file: Upload!): [FileML!]
    uiToVideoConverter(searchWord: String, algorithm: String, percentage: String, file: Upload!): [VideoConverter!]
  }
`;

export default typeDefs;

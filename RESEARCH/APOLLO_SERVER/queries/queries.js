const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Upload

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type ConvertFile{
    _id: String
    name: String
    path: String
    checksum: String
    myFile: File
  }

  type MachineLearning{
    Algorithm: String
		Word: String
		Percentage: String
		Second: String
		PathImage: String
  }
  
  type Query {
    files:[ConvertFile]
    ML:[MachineLearning]
  }

  type Mutation {
    updateFiles(_id: String, name: String, path: String, checksum: String, myfile: Upload!): ConvertFile
    addFiles(_id: String, name: String, path: String, checksum: String, myfile: Upload!): ConvertFile
  }  
`;

module.exports= {
    typeDefs,
};

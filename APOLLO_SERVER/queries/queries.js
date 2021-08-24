const { gql } = require('apollo-server');

const typeDefs = gql`
  type File{
    _id: String
    name: String
    path: String
    checksum: String
  }

  type MachineLearning{
    Algorithm: String
		Word: String
		Percentage: String
		Second: String
		PathImage: String
  }
  
  type Query {
    files:[File]
    ML:[MachineLearning]
  }

  type Mutation {
    updateFiles(_id: String, name: String, checksum: String): File
    addFiles(_id: String, name: String, checksum: String): File
  }  
`;

module.exports= {
    typeDefs,
};

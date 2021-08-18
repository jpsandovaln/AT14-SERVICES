const { gql } = require('apollo-server');

const typeDefs = gql`
  type File{
    _id: String
    name: String
    path: String
    checksum: String
  }

  type Query {
    files:[File]
  }
`;

module.exports= {
    typeDefs,
};

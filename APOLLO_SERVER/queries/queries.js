const { gql } = require('apollo-server');

const typeDefs = gql`
  type Video{
    _id: String
    name: String
    path: String
    checksum: String
  }

  type Query {
    videos:[Video]
  }
`;

module.exports= {
    typeDefs,
};

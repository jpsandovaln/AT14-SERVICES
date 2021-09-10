import { gql } from 'apollo-server';

const typeDefs =  gql`
  scalar Upload
  type ImageToText {
    id: ID!
    text: String!
    path: String!
    left: Number!
    top: Number!
    width: Number!
    height: Number!
  }
`;

export default typeDefs;

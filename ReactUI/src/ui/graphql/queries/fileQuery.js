import { gql } from "@apollo/client";

export const LOAD_FILES = gql`
  query {
    files {
      _id
      name
      path
      checksum
    }
  }
`;

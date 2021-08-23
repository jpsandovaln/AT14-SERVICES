import { gql } from "@apollo/client";

export const CREATE_FILE_MUTATION = gql`
  mutation fileMutation(
      $name: String,
      $path: String,
      $checksum: String
    ) {
    createFile(
      name: $name,
      path: $path,
      checksum: $checksum
    ) {
      _id
    }
  }
`;

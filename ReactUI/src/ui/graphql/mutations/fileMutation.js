import { gql } from "@apollo/client";

export const CREATE_FILE_MUTATION = gql`
mutation Mutation($_id: String, $name: String, $checksum: String) {
  addFiles(_id: $_id,
   name: $name,
   checksum: $checksum
    ) {
     _id
     checksum
     name    
   }
 }
`;

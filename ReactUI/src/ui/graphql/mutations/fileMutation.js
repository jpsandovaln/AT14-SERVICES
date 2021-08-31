import { gql } from "@apollo/client";

export const CREATE_FILE_MUTATION = gql`
mutation Mutation($_id: String, $name: String, $path: String, $checksum: String, $myfile: Upload!) {
  addFiles(_id: $_id,
   name: $name,
   path: $path,
   checksum: $checksum,
   myfile: $myfile
    ) {
     _id
     name    
     path
     checksum     
   }
 }
`;

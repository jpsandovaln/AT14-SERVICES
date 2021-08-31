import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";

const CREATE_FILE_MUTATION = gql`
mutation Mutation($singleUploadFile: Upload!) {
  singleUpload(file: $singleUploadFile) {
    filename
    mimetype
    encoding
  }
}
`;

function FormTest() {
  const [uploadFile, setUploadFile] = useState(null);

  const [addFiles, { error }] = useMutation(CREATE_FILE_MUTATION);

  const setSubmit = () => {
    const data = addFiles({
      variables: {
        singleUploadFile: [uploadFile]
      }
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
				type="file"
				onChange={(e) =>
				  setUploadFile(e.target.files[0])
				}
			/>
      <br />
      <button onClick={setSubmit}> Create File</button>
    </div>
  );
}

export default FormTest;

import React, { useState } from "react";
import { CREATE_FILE_MUTATION } from "../mutations/fileMutation";
import { useMutation } from "@apollo/client";

function Form() {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");
  const [checksum, setChecksum] = useState("");

  const [createFile, { error }] = useMutation(CREATE_FILE_MUTATION);

  const addFile = () => {
    createFile({
      variables: {
        name: name,
        path: path,
        checksum: checksum
      }
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Path"
        onChange={(e) => {
          setPath(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Checksum"
        onChange={(e) => {
          setChecksum(e.target.value);
        }}
      />

      <button onClick={addFile}> Create File</button>
    </div>
  );
}

export default Form;

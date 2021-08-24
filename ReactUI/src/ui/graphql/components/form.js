import React, { useState } from "react";
import { CREATE_FILE_MUTATION } from "../mutations/fileMutation";
import { useMutation } from "@apollo/client";

function Form() {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");
  const [checksum, setChecksum] = useState("");

  const [addFiles, { error }] = useMutation(CREATE_FILE_MUTATION);

  const setSubmit = () => {
    const data = addFiles({
      variables: {
        _id:'',
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
        placeholder="Checksum"
        onChange={(e) => {
          setChecksum(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Path"
        onChange={(e) => {
          setPath(e.target.value);
        }}
      />
      <button onClick={setSubmit}> Create File</button>
    </div>
  );
}

export default Form;

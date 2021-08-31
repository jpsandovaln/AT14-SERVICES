import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const UploadMutation = gql`
  mutation uploadFileML($searchWord: String, $algorithm: String, $percentage: String, $file: Upload!) {
    uploadFileML(searchWord: $searchWord, algorithm: $algorithm, percentage: $percentage, file: $file) {
      Algorithm
      Percentage
    }
  }
`;
const Form = () => {

	const [searchWord, setSearchWord] = useState("");
	const [algorithm, setAlgorithm] = useState("");
	const [percentage, setPercentage] = useState("");
  const [FileData, setUploadFile] = useState(null);

  const [uploadFileML, { error }] = useMutation(UploadMutation);
  /*
  function setSubmit({
    target: {
      validity,
      files: [file],
    },
  }) {
    if (validity.valid) uploadFile({ variables: { file, name: name } });
  }
  */
  const setSubmit = () => {
    const data = uploadFileML({
      variables: {
        searchWord: searchWord,
        algorithm: algorithm,
        percentage: percentage,
        file: FileData  
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
            placeholder="Search Word"
            onChange={(e) => {
                setSearchWord(e.target.value);
            }}
            />
            <input
            type="text"
            placeholder="Algorithm"
            onChange={(e) => {
                setAlgorithm(e.target.value);
            }}
            />
            <input
            type="text"
            placeholder="Percentage"
            onChange={(e) => {
                setPercentage(e.target.value);
            }}
            />
            <input 
            type="file" 
            onChange={(e) =>
                setUploadFile(e.target.files[0])
            }            
            />
            <button onClick={setSubmit}> Create File</button>
        </div>
  );  
};
export default Form;

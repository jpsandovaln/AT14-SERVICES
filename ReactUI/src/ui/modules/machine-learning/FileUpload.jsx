import React from "react";
import axios from "axios";
import SideBar from "../sidebar/SideBar";

const FileUpload = () => {
  const urlML = "http://localhost:8080/analizeImage";

  const [uploadFile, setUploadFile] = React.useState(null);
  const [searchWord, setSearchWord] = React.useState("");
  const [algorithm, setAlgorithm] = React.useState("");
  const [percentage, setPercentage] = React.useState("");

  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("searchWord", searchWord);
    dataArray.append("algorithm", algorithm);
    dataArray.append("percentage", percentage);
    dataArray.append("zipFile", uploadFile);

    axios
      .post(urlML, dataArray, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder={"SearchWord"}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <select onChange={(e) => setAlgorithm(e.target.value)}>
          <option value="CocoSSD">CocoSSD</option>
          <option value="MobilNet">MobilNet</option>
        </select>
        <input
          type="text"
          placeholder={"Percentage"}
          onChange={(e) => setPercentage(e.target.value)}
        />
        <br />
        <input type="file" onChange={(e) => setUploadFile(e.target.files[0])} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FileUpload;

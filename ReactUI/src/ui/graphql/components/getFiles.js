import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_FILES } from "../queries/fileQuery";

function GetFiles() {
  const { error, loading, data } = useQuery(LOAD_FILES);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    if (data) {
      setFiles(data.files);
    }
  }, [data]);

  return (
    <div>
      {" "}
      {files.map((val) => {
        return (
          <h1>
            {" "}
            {val.name} <br></br>
            {val.checksum}
          </h1>
        );
      })}
    </div>
  );
}

export default GetFiles;

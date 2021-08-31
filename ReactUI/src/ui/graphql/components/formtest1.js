import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const UploadMutation = gql`
mutation Mutation($singleUploadFile: Upload!) {
    singleUpload(file: $singleUploadFile) {
      mimetype
      encoding
      filename
    }
  }
`;

// pass in the UploadMutation mutation we created earlier.

const FileUpload = () => {
  const [uploadFile] = useMutation(UploadMutation);

  const onDrop = useCallback(
    (acceptedFiles) => {
      // select the first file from the Array of files
      const file = acceptedFiles[0];
      // use the uploadFile variable created earlier
      uploadFile({
        // use the variables option so that you can pass in the file we got above
        variables: { file },
        onCompleted: () => {},
      });
    },
    // pass in uploadFile as a dependency
    [uploadFile],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <>
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive && 'isActive'}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </>
  );
};

export default FileUpload;
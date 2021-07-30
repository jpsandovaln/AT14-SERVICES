import { React, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import { Button } from "@material-ui/core";


const styles = makeStyles(theme=>({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }
}));

const FileUpload = () =>{
    const uploadInputRef = useRef(null);

    return (
      <div>
        <input
          ref={uploadInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          
        />
        <Button
          onClick={() => uploadInputRef.current && uploadInputRef.current.click()}
          variant="contained"
        >
          Upload
        </Button>
      </div>
    )
}
export default FileUpload;

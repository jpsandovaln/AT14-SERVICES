import React from "react";
import Button from '@material-ui/core/Button';

export default function UploadButton() {
    
    return (
        <div>
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span" >
                    Upload File
                </Button>
            </label>
        </div>
    );
}
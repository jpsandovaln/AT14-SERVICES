import React from "react";
import UploadImages from "./images-upload.component";

const Inicio = () => {
    return (
        <div className="container">
            <h4>React Multiple Images Upload with Preview</h4>

            <div className="content">
                <UploadImages />
            </div>
        </div>
    );
};

export default Inicio;

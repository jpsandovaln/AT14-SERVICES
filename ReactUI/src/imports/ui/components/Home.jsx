import React from "react";
import UploadImages from "./images-upload";
import Uploader from "./uploader/uploader";

const Home = () => {
    return (
        <div className="container">

            <div className="content">
                <UploadImages />
                <Uploader />
            </div>
        </div>
    );
};

export default Home;

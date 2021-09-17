import React from "react";
import SideBar from "../../modules/sidebar/SideBar";
import Home from "../../modules/home/Home";

const HomePage = (props) => {
	return <SideBar page={Home} imageURL={props.imageURL} />;
};

export default HomePage;

import React from "react";
import { Redirect } from "react-router";

import SideBar from "../../modules/sidebar/SideBar";
import Home from "../../modules/home/Home";

const HomePage = (props) => {
	if (!props.authorized) {
		props.history.push("/");
	}
	return <SideBar page={Home} />;
};

export default HomePage;

import React from "react";
import SideBar from "../../modules/sidebar/SideBar";
import Home from "../../modules/home/Home";
import { Redirect } from "react-router";

const HomePage = ({ authorized }) => {
	if (!authorized) {
		return <Redirect to="/" />;
	}
	return <SideBar page={Home} />;
};

export default HomePage;

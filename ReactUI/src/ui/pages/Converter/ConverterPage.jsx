import React from "react";
import SideBar from "../../modules/sidebar/SideBar";
import Converter from "../../modules/converter/Converter";
import { Redirect } from "react-router";
const ConverterPage = ({ authorized }) => {
	if (authorized) {
		return <Redirect to="/" />;
	}
	return <SideBar page={Converter} />;
};

export default ConverterPage;

import React from "react";
import SideBar from "../../modules/sidebar/SideBar";
import MachineLearning from "../../modules/machine-learning/MachineLearning";
import { Redirect } from "react-router";
const MachineLearningPage = ({ authorized }) => {
	if (!authorized) {
		return <Redirect to="/" />;
	}

	return <SideBar page={MachineLearning} />;
};

export default MachineLearningPage;

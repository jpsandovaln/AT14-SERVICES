import React from "react";
import { Redirect } from "react-router";

import SideBar from "../../modules/sidebar/SideBar";
import MachineLearning from "../../modules/machine-learning/MachineLearning";

const MachineLearningPage = ({ props }) => {
	return <SideBar page={MachineLearning} />;
};

export default MachineLearningPage;

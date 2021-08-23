import React from "react";
import SideBar from "../../modules/sidebar/SideBar";
//import ReportConvert from "../../modules/report-convert/ReportConvert";
import ApolloClient from "../../graphql/App"

const ReportConvertPage = () => {
	return <SideBar page={ApolloClient} />;
};

export default ReportConvertPage;

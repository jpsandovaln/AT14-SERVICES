import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./ui/pages/Home/HomePage";
import ConverterPage from "./ui/pages/Converter/ConverterPage";
import MachineLearningPage from "./ui/pages/MachineLearning/MachineLearningPage";
import ExtractorServicePage from "./ui/pages/ExtractorService/ExtractorPage";
import LoginPage from "./ui/pages/login/LoginPage";
import ReportConvertPage from "./ui/pages/ReportConvert/ReportConvertPage";
import LoginCreate from "./ui/pages/login/LoginCreate";

const App = () => {
	const [isLogin, setIsLogin] = useState(false);
	const [userInfo, setUserInfo] = useState({});
	console.log("userInfo", userInfo);
	return (
		<Router>
			<Switch>
				<Route
					exact
					path="/"
					component={(props) => (
						<LoginPage
							setIsLogin={setIsLogin}
							history={props.history}
							setUserInfo={setUserInfo}
						/>
					)}
				/>
				<Route
					exact
					path="/Create"
					component={(props) => (
						<LoginCreate
							setIsLogin={setIsLogin}
							history={props.history}
						/>
					)}
				/>
				<Route
					exact
					path="/Home"
					component={(props) => (
						<HomePage imageURL={userInfo.imageUrl} />
					)}
				/>

				<Route
					exact
					path="/Converter"
					component={(props) => (
						<ConverterPage
							isLogin={isLogin}
							history={props.history}
							imageURL={userInfo.imageUrl}
						/>
					)}
				/>
				<Route
					exact
					path="/MachineAnalize"
					component={(props) => (
						<MachineLearningPage
							isLogin={isLogin}
							history={props.history}
							imageURL={userInfo.imageUrl}
						/>
					)}
				/>
				<Route
					exact
					path="/ExtractorService"
					component={(props) => (
						<ExtractorServicePage
							isLogin={isLogin}
							history={props.history}
							imageURL={userInfo.imageUrl}
						/>
					)}
				/>
				<Route
					exact
					path="/graphql"
					component={(props) => (
						<ReportConvertPage imageURL={userInfo.imageUrl} />
					)}
				/>
			</Switch>
		</Router>
	);
};

export default App;

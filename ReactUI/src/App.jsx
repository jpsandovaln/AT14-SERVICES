import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./ui/pages/Home/HomePage";
import ConverterPage from "./ui/pages/Converter/ConverterPage";
import MachineLearningPage from "./ui/pages/MachineLearning/MachineLearningPage";
import LoginPage from "./ui/pages/login/LoginPage";

const App = () => {
	const [isLogin, setIsLogin] = useState(false);
	console.log("isLogin", isLogin);
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
						/>
					)}
				/>

				<Route
					exact
					path="/Home"
					component={(props) => (
						<HomePage isLogin={isLogin} history={props.history} />
					)}
				/>

				<Route
					exact
					path="/Converter"
					component={(props) => (
						<ConverterPage
							isLogin={isLogin}
							history={props.history}
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
						/>
					)}
				/>
			</Switch>
		</Router>
	);
};

export default App;

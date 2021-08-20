import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./ui/pages/Home/HomePage";
import ConverterPage from "./ui/pages/Converter/ConverterPage";
import MachineLearningPage from "./ui/pages/MachineLearning/MachineLearningPage";
import LoginPage from "./ui/pages/login/LoginPage";

const App = () => {
	let isLoggedIn = false;
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LoginPage} />
				<Route
					exact
					path="/Home"
					component={() => <HomePage authorized={isLoggedIn} />}
				/>

				<Route
					exact
					path="/Converter"
					component={() => <ConverterPage authorized={isLoggedIn} />}
				/>
				<Route
					exact
					path="/MachineAnalize"
					component={MachineLearningPage}
				/>
			</Switch>
		</Router>
	);
};

export default App;

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
					component={() => <LoginPage setIsLogin={setIsLogin} />}
				/>

				<Route
					exact
					path="/Home"
					component={() => <HomePage authorized={true} />}
				/>

				<Route
					exact
					path="/Converter"
					component={() => <ConverterPage authorized={isLogin} />}
				/>
				<Route
					exact
					path="/MachineAnalize"
					component={() => (
						<MachineLearningPage authorized={isLogin} />
					)}
				/>
			</Switch>
		</Router>
	);
};

export default App;

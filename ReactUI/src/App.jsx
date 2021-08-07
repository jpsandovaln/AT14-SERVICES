import React from "react";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./ui/pages/Home/HomePage";
import ConverterPage from "./ui/pages/Converter/ConverterPage";
import MachineLearningPage from "./ui/pages/MachineLearning/MachineLearningPage";

const theme = unstable_createMuiStrictModeTheme();

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/Converter" component={ConverterPage} />
				<Route exact path="/MachineAnalize" component={MachineLearningPage} />
			</Switch>
		</Router>
	);
}

export default App;

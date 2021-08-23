import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./ui/pages/Home/HomePage";
import ConverterPage from "./ui/pages/Converter/ConverterPage";
import MachineLearningPage from "./ui/pages/MachineLearning/MachineLearningPage";
import ReportConvertPage from "./ui/pages/ReportConvert/ReportConvertPage";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/Converter" component={ConverterPage} />
				<Route
					exact
					path="/MachineAnalize"
					component={MachineLearningPage}
				/>
				<Route exact path="/graphql" component={ReportConvertPage} />
			</Switch>
		</Router>
	);
};

export default App;

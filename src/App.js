import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Crm from "./views/Crm";
import Home from "./views/Home";
import MobileApp from "./views/MobileApp";
import Wealth from "./views/Wealth";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/mobile-app">
					<MobileApp />
				</Route>
				<Route path="/crm">
					<Crm />
				</Route>{" "}
				<Route path="/wealth">
					<Wealth />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

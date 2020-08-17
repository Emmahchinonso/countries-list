
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyle from "./components/GlobalStyles";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const App = () => {
	
	console.log("App rendered");
	return (
		<Router>
			<>
				<GlobalStyle />
				<Header />
				<Switch>
					<Route exact path="/" render={(props) => <Home {...props} />} />

					<Route
						path="/searchresult/:country"
						render={(props) => {
							console.log("search rendered");
							return <h1>Search result here</h1>;
						}}
					/>

					<Route exact path="/detail/:country" component={Detail} />
				</Switch>
			</>
		</Router>
	);
};

export default App;

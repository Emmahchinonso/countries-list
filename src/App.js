
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyle from "./components/GlobalStyles";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResult from "./pages/SearchResult";
import RegionResult from "./pages/RegionResult";

const App = () => {

	return (
		<Router>
			<>
				<GlobalStyle />
				<Header />
				<Switch>
					<Route exact path="/" render={(props) => <Home {...props} />} />

					<Route
						path="/searchresult/:country"
						component={SearchResult}
					/>

          <Route path="/regionSearch/:region" component={RegionResult} />

					<Route exact path="/detail/:country" component={Detail} />
				</Switch>
			</>
		</Router>
	);
};

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import GlobalStyle from "./components/GlobalStyles";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Theme";
import useDarkMode from "./hooks/useDarkMode";


const App = () => {
	const [isDarkMode, toggleTheme] = useDarkMode();

	return (
		<Router>
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<>
					<GlobalStyle />
					<Header isDarkMode={isDarkMode} themeToggler={toggleTheme} />
					<Switch>
						<Route exact path="/" component={Home} />

						<Route exact path="/detail/:country" component={Detail} />
					</Switch>
				</>
			</ThemeProvider>
		</Router>
	);
};

export default App;

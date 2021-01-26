import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyle from "./components/GlobalStyles";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResult from "./pages/SearchResult";
import RegionResult from "./pages/RegionResult";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Theme";

const getTheme = (query) => {
  if(window.localStorage.getItem(query)){
    return window.localStorage.getItem(query);
  }
  return false;
}
const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(() => getTheme('isDarkMode'));

	const themeToggler = () => {
    setIsDarkMode(!isDarkMode);
    window.localStorage.setItem('isDarkMode', isDarkMode)
	};

	return (
		<Router>
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<>
					<GlobalStyle />
					<Header isDarkMode={isDarkMode} themeToggler={themeToggler} />
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

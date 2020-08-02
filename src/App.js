import { hot } from "react-hot-loader/root";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import GlobalStyle from "./components/GlobalStyles";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
	// for country details
	const [country, setCountry] = useState({});
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [query, setQuery] = useState("");
	const [url, setUrl] = useState("https://restcountries.eu/rest/v2/all");

	// for selectBox
	const [option, setOption] = useState("Filter by Region");
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
    setIsLoading(true);
    console.log('run useEffect')
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setCountries(data);
				setIsLoading(false);
				console.log(data);
			})
			.catch((error) => console.log(error));
	}, [url]);

	return (
		<Router>
			<>
				<GlobalStyle />
				<Header />
				<Switch>
					<Route exact path="/" render={(props) => <Home
              {...props}
							query={query}
							setUrl={setUrl}
							setQuery={setQuery}
							option={option}
							setOption={setOption}
							isOpen={isOpen}
							setIsOpen={setIsOpen}
							isLoading={isLoading}
							countries={countries}
							setCountry={setCountry}
						/>} />
						
				
					<Route
						path="/:country"
						render={(props) => <Details country={country} {...props} />}
					/>
				</Switch>
			</>
		</Router>
	);
};

export default hot(App);

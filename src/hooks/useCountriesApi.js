import React, { useEffect, useState } from "react";

export const useCountriesApi = () => {
	const [url, setUrl] = useState("https://restcountries.eu/rest/v2/all");
	const [countries, setCountries] = useState([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setCountries(data);
				setIsLoading(false);
			})
			.catch((err) => setError(err));
	}, [url]);

	return [countries, isLoading, error, setUrl];
};

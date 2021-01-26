import React, { useEffect, useState } from "react";

export const useCountriesApi = () => {
	const [countries, setCountries] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState("https://restcountries.eu/rest/v2/all")

	useEffect(() => {
		setIsLoading(true);
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
        setCountries(data);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				setError(true);
			});
	}, []);

	return [countries, isLoading, error, setUrl];
};

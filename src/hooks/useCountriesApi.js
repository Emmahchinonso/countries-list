import React, { useEffect, useState } from "react";

export const useCountriesApi = (initialUrl) => {
	const [countries, setCountries] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(initialUrl)
			.then((response) => response.json())
			.then((data) => {
        setCountries(data);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				setError(true);
			});
	}, [initialUrl]);

	return [countries, isLoading, error];
};

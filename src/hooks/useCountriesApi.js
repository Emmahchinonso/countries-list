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
        if(!window.localStorage.getItem('countries')){
          window.localStorage.setItem('countries', JSON.stringify(data))
        }
        setCountries(data);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				setError(true);
			});
	}, []);

	return [countries, isLoading, error];
};

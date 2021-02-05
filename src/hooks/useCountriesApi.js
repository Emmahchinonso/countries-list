import React, { useEffect, useState } from "react";

export const useCountriesApi = (api) => {
	const [countries, setCountries] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(api)

	useEffect(() => {
		setIsLoading(true);
    setError(false)
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
	}, [url]);

	return [countries, isLoading, error, setUrl];
};

import React, { useEffect, useState } from "react";

const useDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(() => getTheme());

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	useEffect(() => {
		window.localStorage.setItem("isDarkMode", isDarkMode);
	}, [isDarkMode]);

	return [isDarkMode, toggleTheme];
};

const getTheme = () => {
	if (window.localStorage.getItem("isDarkMode")) {
		return JSON.parse(window.localStorage.getItem("isDarkMode"));
	}
	return false;
};

export default useDarkMode;

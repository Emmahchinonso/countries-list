import React from "react";

const Detail = ({country}) => {
	console.log(country);
	return (
		<>
			<h1>{country.name}</h1>
			<p>Love me</p>
		</>
	);
};

export default Detail;

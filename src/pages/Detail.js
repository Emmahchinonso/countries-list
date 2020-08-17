import React from "react";

const Detail = ({match:{params}, history}) => {
  console.log(params);
  console.log("Detail rendered")
	return (
		<>
			<h1>{params.country}</h1>
			<p>Love me</p>
		</>
	);
};

export default Detail;

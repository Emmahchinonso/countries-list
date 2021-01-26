import React, { useState, useEffect } from "react";
import InputBox from "../components/InputBox";
import SelectBox from "../components/SelectBox";
import Loading from "../components/loading";
import Card from "../components/Card";
import { Countries, CountriesContainer } from "../components/styled/Countries";
import Container from "../components/styled/Container";
import ErrorText from "../components/styled/ErrorText";
import { useCountriesApi } from "../hooks/useCountriesApi";

const Home = () => {
	const [query, setQuery] = useState("");
	const [countries, isLoading, error, setUrl] = useCountriesApi();

	return (
		<>
			<Container>
				<InputBox query={query} setQuery={setQuery} />
				<SelectBox setUrl={setUrl} />
			</Container>

			<Countries>
				{error && <ErrorText>Failed to fetch data...</ErrorText>}
				<CountriesContainer>
					{isLoading && <Loading />}

					{countries &&
						countries.map((country) => {
							return <Card country={country} key={country.name} />;
						})}
				</CountriesContainer>
			</Countries>
		</>
	);
};
export default Home;

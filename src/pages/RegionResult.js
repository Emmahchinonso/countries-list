import React, { useState, useEffect } from "react";
import InputBox from "../components/InputBox";
import SelectBox from "../components/SelectBox";
import Loading from "../components/loading";
import Card from "../components/Card";
import { Countries, CountriesContainer } from "../components/styled/Countries";
import Container from "../components/styled/Container";
import ErrorText from "../components/styled/ErrorText";
import { useCountriesApi } from "../hooks/useCountriesApi";
import { useParams } from "react-router-dom";

const RegionResult = () => {
	const { region } = useParams();
	const [query, setQuery] = useState("");
	const initialUrl = `https://restcountries.eu/rest/v2/name/${region}?fullText=true`;
  const [countries, isLoading, error] = useCountriesApi(initialUrl);

	// for selectBox
	const [option, setOption] = useState("Filter by Region");
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Container>
				<InputBox query={query} setQuery={setQuery} />
				<SelectBox
					option={option}
					setOption={setOption}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
			</Container>

			<Countries>
				{error && <ErrorText>Failed to fetch data...</ErrorText>}
				<CountriesContainer>
					{isLoading ? (
						<Loading />
					) : (
						countries.map((country) => {
							return <Card country={country} key={country.name} />;
						})
					)}
				</CountriesContainer>
			</Countries>
		</>
	);
};

export default RegionResult;
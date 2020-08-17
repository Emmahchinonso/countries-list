import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InputBox from "../components/InputBox";
import SelectBox from "../components/SelectBox";
import Loading from "../components/loading";
import Card from "../components/Card";
import { Countries, CountriesContainer } from "../components/styled/Countries";
import { useCountriesApi } from "../hooks/useCountriesApi";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 95%;
	padding: 0 1rem;
	margin: 2.3rem auto;
	@media (max-width: 768px) {
		padding: 0 0.5rem;
		flex-direction: column;
	}
`;

const Home = () => {
	const [query, setQuery] = useState("");

	const [countries, isLoading, error, setUrl] = useCountriesApi();
	// for selectBox
	const [option, setOption] = useState("Filter by Region");
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
    
			<Container>
				<InputBox query={query} setUrl={setUrl} setQuery={setQuery} />
				<SelectBox
					option={option}
					setOption={setOption}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					setUrl={setUrl}
				/>
			</Container>
			
			<Countries>
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
export default Home;

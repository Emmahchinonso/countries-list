import React from 'react';
import InputBox from "../components/InputBox";
import SelectBox from "../components/SelectBox";
import Loading from "../components/loading";
import Card from "../components/Card";

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


const SearchResult = ({
 	query,
	setUrl,
	setQuery,
	option,
	setOption,
	isOpen,
	setIsOpen,
	isLoading,
	countries,
}) => {
  
  console.log("Home component rendered");
	return (
		<>
			<Container>
				<InputBox query={query} setUrl={setUrl} setQuery={setQuery}/>
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

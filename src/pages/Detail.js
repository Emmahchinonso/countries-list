import React from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useCountriesApi } from "../hooks/useCountriesApi";
import Button from "../components/styled/Button";
import ListWrapper from "../components/styled/ListWrapper";
import ListItem from "../components/styled/ListItem";

const DetailContainer = styled.section`
	max-width: 95%;
	padding: 0 1rem 1.5rem;
  margin: 0 auto;
  color: var(--text-color);
`;

const BackButton = styled(Button)`
  margin: 4rem 0;
  position: relative;
  cursor: pointer;
    &::before{
      content: "\f30a";
      display: inline-block;
      font-style: normal;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      color: var(--text-color);
      font-size: 1rem;
      margin-right: 1em;
      margin-top: .2em;
    }
`;

const BorderButton = styled(Button)`
  margin: 0 0 .5rem .7rem;
`;

const DetailContentWrapper = styled.div`
  width: 600px;
  max-width: 50%;
  margin-left: 1.5rem;

  @media(max-width: 768px){
    max-width: 100%;
    margin-left: 0;
    margin-top: 2rem;
  }
`;
const DetailImage = styled.img`
	width: 600px;
	width: 45%;
	height: auto;
  order: -1;
  
  @media(max-width: 768px){
    width: 100%;
  }
`;
const DetailHeading = styled.h2`
  font-size: 2.1rem;
  margin-bottom: .7em;
  font-weight: 900;
`;
const DetailInnerContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: 350px){
    flex-direction: column;
  }
`;

const DetailWrapper = styled.div`
	display: flex;
	justify-content: space-between;
  align-items: center;
  
  @media(max-width: 768px){
    flex-direction: column;
    align-items: stretch;
  }
`;

const DetailList = styled.ul`
	list-style: none;
`;

const Item = styled(ListItem)`
	padding: 0.5rem 0;
	font-size: 0.9rem;
`;

const BoldText = styled.span`
	font-weight: 600;
`;

const DetailColumn1 = styled.div``;
const DetailColumn2 = styled.div`
`;
const DetailFooter = styled.div`
  margin-top: 2.5rem;
`;

const Detail = () => {
  const { country } = useParams();
  const history = useHistory();
	let exactCountry;
	const countries = JSON.parse(window.localStorage.getItem("countries"));

	for (let countryObj of countries) {
		if (countryObj["name"] === country) {
			exactCountry = { ...countryObj };
			break;
		}
	}
	console.log(countries, exactCountry, country);
	const {
		name,
		nativeName,
		flag,
		population,
		region,
		subregion,
		capital,
		currencies,
		languages,
		topLevelDomain,
		borders,
	} = exactCountry;

	return (
		<DetailContainer>
			<BackButton onClick={() => history.goBack()}>Back</BackButton>
			<DetailWrapper>
				<DetailContentWrapper>
					<DetailHeading>{name}</DetailHeading>
					<DetailInnerContent>
						<DetailColumn1>
							<DetailList>
								<Item>
									<BoldText>Native Name: </BoldText>
									{nativeName}
								</Item>
								<Item>
									<BoldText>Population: </BoldText>
									{(+population).toLocaleString()}
								</Item>
								<Item>
									<BoldText>Region: </BoldText>
									{region}
								</Item>
								<Item>
									<BoldText>Sub Region: </BoldText>
									{subregion}
								</Item>
								<Item>
									<BoldText>Capital: </BoldText>
									{capital}
								</Item>
							</DetailList>
						</DetailColumn1>
						<DetailColumn2>
							<DetailList>
								<Item>
									<BoldText>Top Level Domain: </BoldText>
									{topLevelDomain}
								</Item>
								<Item>
									<BoldText>Currencies: </BoldText>
									{currencies.map((currency) => currency.name).join(", ")}
								</Item>
								<Item>
									<BoldText>Languages: </BoldText>
									{languages.map((language) => language.name).join(", ")}
								</Item>
							</DetailList>
						</DetailColumn2>
					</DetailInnerContent>
					<DetailFooter>
						<BoldText>Border Countries: </BoldText>
						{borders.map((border) => {
							return <BorderButton key={border}>{border}</BorderButton>;
						})}
					</DetailFooter>
				</DetailContentWrapper>
				<DetailImage src={flag} alt={`${name} flag`} />
			</DetailWrapper>
		</DetailContainer>
	);
};

export default Detail;

import React from "react";
import styled from "styled-components";
import ListWrapper from "./styled/ListWrapper";
import ListItem from "./styled/ListItem";
import { Link } from "react-router-dom";

const CardWrapper = styled.article`
	background: var(--elements-background);
	border-radius: 0.5rem;
	box-shadow: 0 3px 4px var(--shadow);
`;

const Image = styled.img`
	display: block;
	width: 100%;
	height: 10rem;
	object-fit: cover;
	border-top-left-radius: 0.5rem;
	border-top-right-radius: 0.5rem;
`;

const CardContent = styled.div`
	padding: 1rem 1.5rem;
`;

const Info = styled(ListItem)`
	padding: 0;
	padding-bottom: 0.5rem;
	font-size: 0.9rem;
`;

const ContentHeader = styled.h3`
	padding-top: 0.5rem;
	font-weight: 800;
`;

const CountryLink = styled(Link)`
	text-decoration: none;
  display: block;
  transition: transform .3s ease;
    &:hover {
      transform: translateY(-.5rem);
    }
`;

const Bold = styled.span`
	font-weight: 600;
`;

const ContentList = styled(ListWrapper)``;

const Card = ({ country }) => {
	const { flag, name, population, region, capital } = country;
	return (
		<CountryLink to={`/detail/${name.toLowerCase()}`}>
			<CardWrapper>
				<Image src={flag}/>
				<CardContent>
					<ContentHeader>{name}</ContentHeader>
					<ContentList>
						<Info key={1}>
							<Bold>Population</Bold> : {(+population).toLocaleString()}
						</Info>
						<Info key={2}>
							<Bold>Region</Bold> : {region}
						</Info>
						<Info key={3}>
							<Bold>Capital</Bold> : {capital}
						</Info>
					</ContentList>
				</CardContent>
			</CardWrapper>
		</CountryLink>
	);
};

export default Card;

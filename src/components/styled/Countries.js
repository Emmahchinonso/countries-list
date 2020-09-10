import styled from "styled-components";

export const Countries = styled.main`
	width: 95%;
	padding: 0 1rem;
	margin: 0 auto;
`;

export const CountriesContainer = styled.div`
	width: 100%;
	display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2.5rem;
	gap: 2.5rem;
`;

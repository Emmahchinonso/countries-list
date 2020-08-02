import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
	width: 30rem;
	max-width: 100%;
	border-radius: 0.2rem;
  padding: 1rem;
  box-shadow: 1px 2px 5px var(--shadow);
	background: var(--elements-background);
	i {
		color: var(--input-color);
		font-size: 1.1rem;
		padding: 0.5rem;
	}
`;

const Input = styled.input`
  border: none;
  width: 80%;
	outline: none;
	font-size: inherit;
	padding-left: 0.7rem;
	&::placeholder {
		font-style: italic;
		color: var(--input-color);
	}
`;

const Label = styled.label`
  width: 100%;
  display: block;
  transition: .3s ease;
  cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
`

const SearchButton = styled.button`
  border: none;
  background: none;
  outlineL none;
  cursor: pointer;
`;

const InputBox = ({ query, setUrl, setQuery }) => {
	return (
		<InputWrapper>
			<form onSubmit={(event) => {
        event.preventDefault();
        setUrl(`https://restcountries.eu/rest/v2/name/${query}?fullText=true`)
      }}>
        <Label htmlFor="input">
          <SearchButton type="submit">
            <i class="fas fa-search"></i>
          </SearchButton>
          <Input
            id="input"
            type="text"
            value={query}
            placeholder="Search for a country.."
            onChange={(event) => setQuery(event.target.value)}
				/>
        </Label>
				
			</form>
		</InputWrapper>
	);
};

export default InputBox;

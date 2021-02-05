import React from "react";
import styled from "styled-components";

const InputBox = ({ query, setQuery, setUrl }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		setUrl(`https://restcountries.eu/rest/v2/name/${query}?fullText=true`);
		setQuery("");
	};

	return (
		<InputWrapper>
			<form onSubmit={handleSubmit}>
				<Label htmlFor="input">
					<SearchButton type="submit">
						<i className="fas fa-search"></i>
					</SearchButton>
					<Input
						id="input"
						type="text"
						value={query}
						placeholder="Search for a country.."
						onChange={(event) => setQuery(event.target.value.trim())}
					/>
				</Label>
			</form>
		</InputWrapper>
	);
};

const InputWrapper = styled.div`
	width: 30rem;
	max-width: 100%;
	border-radius: 0.2rem;
	padding: 1rem;
	box-shadow: 1px 2px 5px var(--shadow);
	background: var(--elements-background);
  transition: 0.3s ease;
    &:hover {
      transform: translateY(-.5rem);
    }
    i {
      color: var(--input-color);
      font-size: 1.1rem;
      padding: 0.5rem;
    }
`;

const Input = styled.input`
  border: none;
  background: none;
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
	
	cursor: pointer;
	
`;

const SearchButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;

export default InputBox;

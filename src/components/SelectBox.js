import React from "react";
import styled from "styled-components";
import ListWrapper from "./styled/ListWrapper";
import ListItem from "./styled/ListItem";

const SelectContainer = styled.div`
	width: 12rem;
	background: var(--elements-background);
	border-radius: 0.2rem;
	position: relative;
	box-shadow: 1px 2px 5px var(--shadow);
	@media (max-width: 768px) {
		margin-top: 1rem;
	}
`;

const SelectedItem = styled.button`
	padding: 1rem 1.2rem;
	display: flex;
	justify-content: space-between;
	font-size: 1rem;
	align-items: center;
	background: none;
	border: none;
	outline: none;
	width: 100%;
	margin-top: 0.4rem;
	cursor: pointer;
	transition: 0.3s ease;
	&:hover {
		transform: translateY(-1rem);
	}
	i {
		padding-left: 1.1rem;
		font-size: 0.8rem;
	}
`;

const SelectItemsWrapper = styled.div`
	width: 100%;
	position: absolute;
	top: 115%;
	background: var(--elements-background);
	border-radius: 0.2rem;
`;

const Option = styled(ListItem)`
  transition: 0.5s ease;
  cursor: pointer;
  &:hover {
    letter-spacing: .5rem;
`;

const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const List = ({ options, setOption, setUrl, isOpen, setIsOpen }) => {
	return (
		<ListWrapper>
			{options.map((item, index) => {
				return (
					<Option
						key={index}
						onClick={() => {
							setOption(item);
							setIsOpen(!isOpen);
							setUrl(`https://restcountries.eu/rest/v2/region/${item}`);
						}}
					>
						{item}
					</Option>
				);
			})}
		</ListWrapper>
	);
};

const SelectBox = ({ setUrl }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [option, setOption] = useState("Filter by Region");

	return (
		<SelectContainer>
			<SelectedItem onClick={() => setIsOpen(!isOpen)}>
				{option}
				<i className="fas fa-chevron-down"></i>
			</SelectedItem>
			<SelectItemsWrapper>
				{isOpen && (
					<List
						options={options}
						setOption={setOption}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						setUrl={setUrl}
					/>
				)}
			</SelectItemsWrapper>
		</SelectContainer>
	);
};

export default SelectBox;

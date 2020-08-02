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
  margin-top: .4rem;
  cursor: pointer;
  transition: .3s ease;
    &:hover {
      transform: scale(1.1);
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
    transform: scale(1.1);
`;

const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const List = ({ options, setOption, setUrl, isOpen, setIsOpen }) => {
	return (
		<ListWrapper>
			{options.map((item, index) => {
				return (
          <Option key={index} onClick={() => {
            setOption(item);
            setIsOpen(!isOpen)
            setUrl(`https://restcountries.eu/rest/v2/region/${item.toLowerCase()}`)
          }}>
						{item}
					</Option>
				);
			})}
		</ListWrapper>
	);
};

const SelectBox = ({ option, setOption, isOpen, setIsOpen, setUrl }) => {
	return (
		<SelectContainer>
			<SelectedItem onClick={() => setIsOpen(!isOpen)}>
				{option}
				<i class="fas fa-chevron-down"></i>
			</SelectedItem>
			<SelectItemsWrapper>
				{isOpen && (
					<List options={options} setOption={setOption} setUrl={setUrl} isOpen={isOpen} setIsOpen={setIsOpen} />
				)}
			</SelectItemsWrapper>
		</SelectContainer>
	);
};

export default SelectBox;

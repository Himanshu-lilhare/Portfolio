import React from "react";
import styled from "styled-components";

const FilterBarDiv = styled.div`
  margin-bottom: 1rem;
`;

const Select = styled.select`
  padding: 10px;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.492);
  border: none;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: black;
    color: white;
  }
  option[value='select-categories'] {
display: none;
}

`;
const Option = styled.option`
  border-radius: 10px;
  background-color: white;
  color: black;
`;

const FilterBar = ({ setcategory, uniqueCategories }) => {
  return (
    <FilterBarDiv>
      <Select
        onChange={(e) => {
          setcategory(e.target.value);
        }}
        defaultValue={'select-categories'}
      >
        <option disabled value={"select-categories"}>Select Categories</option>
        {uniqueCategories.map((item, index) => {
          return <Option thisvalue={item} value={item} key={index}>{item}</Option>;
        })}
      </Select>
    </FilterBarDiv>
  );
};

export default FilterBar;

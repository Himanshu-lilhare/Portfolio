import React from "react";

import styled, { keyframes } from "styled-components";

const border = keyframes`
from{
 transform: rotate(0deg);
}
to{
 transform:rotate(-360deg);
}
`;
const Box = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 0px 0rem 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  padding: 2px;
  color: ${(props) => props.theme.text};
  backdrop-filter: blur(4px);
  margin-bottom: 2rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  overflow: hidden;

  @media only screen and (max-width: 400px) {
    width: 250px;
    height: 250px;
  }
  &::before {
    content: "";
    z-index: 1;
    position: absolute;
    width: 800px;
    height: 800px;

    background-image: conic-gradient(black 20deg, transparent 120deg);
    animation: ${border} 6s linear infinite;
  }
  .innerdiv {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;
    background-color: #f0f0f0;
    padding: 0rem 0.8rem;
    border-radius: 10px;
  }
`;
const Image = styled.div`
  background-image: url(${(props) => props.imgsrc});
  background-size: cover;
  background-position: top;
  transition: ease-in-out 5s;
  margin-top: 1rem;
  width: 100%;
  height: 60%;
  border: 2px solid black;

  ${Box}:hover & {
    background-position: bottom;
  }
`;
const Title = styled.h4`
  color: inherit;
  padding: 0.7rem 0rem;
  text-align: left;
  font-family: "Karla", sans-serif;
  font-weight: 500;

  font-size: 1.1em;
  @media only screen and (max-width: 370px) {
    font-size: 0.8em;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.6rem;
`;
const NavButton = styled.a`
  text-decoration: none;
  color: black;
  padding: 0.5rem;
  border-radius: 7px;
  border: none;
  box-shadow: -1px 1px 1px 1px black;
  font-size: 15px;
  font-weight: 500;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const ProjectComp = (props) => {
  const { name, imgSrc, link, codeLink } = props.data;
  console.log("aaya bhai")
  if(props.category==="All"){
    return  <Box>
    <div className="innerdiv">
      <Image imgsrc={imgSrc} />

      <Title>{name}</Title>
      <ButtonContainer>
        <NavButton target="_blank" href={link}>
          Live
        </NavButton>
        <NavButton target="_blank" href={codeLink}>
          Code
        </NavButton>
      </ButtonContainer>
    </div>
  </Box>
  }
  if (props.data.category.includes(props.category)) {
    return (
      <Box>
        <div className="innerdiv">
          <Image imgsrc={imgSrc} />

          <Title>{name}</Title>
          <ButtonContainer>
            <NavButton target="_blank" href={link}>
              Live
            </NavButton>
            <NavButton target="_blank" href={codeLink}>
              Code
            </NavButton>
          </ButtonContainer>
        </div>
      </Box>
    );
  }
};

export default ProjectComp;

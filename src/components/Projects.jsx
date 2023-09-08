import React from "react";
import styled from "styled-components";
import { ProjectsData } from "../data/ProjectData";
import Anchor from "../subComponents/Anchor";
import Logo from "../subComponents/Logo";
import PowerButton from "../subComponents/PowerButton";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import ProjectComp from "./ProjectComp";

const MainContainer = styled.div`
 position: relative;
  min-height: calc(100vh - 5rem);
  padding: 5rem 1rem;
  display: flex;
  justify-content: center;
 
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};


  flex-wrap: wrap;
`;

const Projects = () => {
  return (
    <MainContainer>
      <Container>
        <Logo />
        <SocialMediaIcons />
        <Anchor />
        <PowerButton />

        {ProjectsData.map((ele, index) => {
          return <ProjectComp id={index + 100} data={ele} />;
        })}
      </Container>
    </MainContainer>
  );
};

export default Projects;

import React, { useState } from "react";
import styled from "styled-components";
import { ProjectsData,filteruniqueCategory } from "../data/ProjectData";
import Anchor from "../subComponents/Anchor";
import Logo from "../subComponents/Logo";
import PowerButton from "../subComponents/PowerButton";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import ProjectComp from "./ProjectComp";
import FilterBar from "./FilterBar";

const MainContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 5rem);
  padding: 5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;
const uniqueCategories  = filteruniqueCategory(ProjectsData)
const Projects = () => {
const [category,setCategory] = useState(uniqueCategories[0])
 


  return (
    <MainContainer>
      <Logo />
      <SocialMediaIcons />
      <Anchor />
      <PowerButton />
       <FilterBar setcategory={setCategory} category={category} uniqueCategories={uniqueCategories}/>
      {ProjectsData.map((ele, index) => {
        return <ProjectComp  id={index + 100} data={ele} category={category} />;
      })}
    </MainContainer>
  );
};

export default Projects;

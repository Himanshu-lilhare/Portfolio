import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";

import { skillData } from "../data/skillsdata";
import Logo from "../subComponents/Logo";
import { motion } from "framer-motion";
import PowerButton from "../subComponents/PowerButton";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import { darkTheme } from "./Themes";

import Particle from "./Particle";

const Main = styled.div`
  background-color: ${(props) => props.theme.text};
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  column-gap: 30px;
  height: 100%;
  width: 90%;
  overflow-y: scroll;
`;
const Container = styled.div`
  width: 380px;
  /* background-color: #f2eeea; */
  min-height: 269px;
  border: 0.2px solid white;
  transition: all 0.3s ease-in-out;
  margin-bottom: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  padding-bottom: 0;
  border-radius: 0 30px 0 30px;
  &:nth-child(1) {
    margin-top: 7rem;
  }
  .giveColor {
    color: white;
  }
  .skills {
    line-height: 22px;
    letter-spacing: 1px;
    font-weight: 500;
  }
  &:hover {
    background-color: ${(props) => props.theme.text};
  }
  &:hover .giveColor {
    color: ${(props) => props.theme.body};
  }

  @media only screen and (max-width: 444px) {
    min-height: 340px;
    width: 220px;
  }
`;
const AnimateDiv = motion(Container);



const MySkills = () => {
  return (
    // <UnderConstruction/>
    <ThemeProvider theme={darkTheme}>
      <Main>
        <Particle theme="dark" />
        <SocialMediaIcons myskills={true} theme="dark" />
        <Logo theme="dark" />
        <PowerButton />
        <ContainerWrapper>
          {skillData.map((e, index) => {
            return (
              <AnimateDiv
                key={index + 400}
                initial={{ x: index % 2 == 0 ? -1000 : 1000 }}
                transition={{
                  type: "spring",
                  duration: 0.5,
                  delay: index >= 0 ? 0.5 : index,
                }}
                animate={{ x: 0 }}
              >
                <h1
                  className="giveColor"
                  style={{
                    textAlign: "center",
                    marginBottom: "1rem",
                    padding: "10px 0",
                    borderTop: "1px solid grey",
                    borderBottom: "1px solid grey",
                    fontSize: "18px",
                  }}
                >
                  {e.head}
                </h1>
                <p
                  className="giveColor"
                  style={{
                    marginLeft: "13px",
                    marginBottom: "1rem",
                    fontSize: "17px",
                    lineHeight: "28px",
                  }}
                >
                  {e?.description}
                </p>
                <div>
                  <h3
                    className="giveColor"
                    style={{ letterSpacing: "1px", textTransform: "uppercase" }}
                  >
                    Skills.
                  </h3>
                  <p
                    className="giveColor skills"
                    style={{
                      marginLeft: "13px",
                      marginTop: "10px",
                      fontSize: "14px",
                    }}
                  >
                    {e.skills}
                  </p>
                </div>
              </AnimateDiv>
            );
          })}
        </ContainerWrapper>
      </Main>
    </ThemeProvider>
  );
};

export default MySkills;

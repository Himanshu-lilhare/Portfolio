import React from "react";
import styled, { keyframes } from "styled-components";
import { bubbleData } from "../data/bubblesdata";
import Logo from "../subComponents/Logo";
import PowerButton from "../subComponents/PowerButton";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import "../App.css";
import { motion } from "framer-motion";
const Box = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow-y: hidden;
`;
const animate = keyframes`
  from{
    transform: translateY(100vh) scale(0);
  }
  to{
    transform: translateY(-10vh) scale(1);
  }
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 0;
  display: flex;
  span {
    width: 30px;
    height: 10px;
    z-index: 0;
    background-color: white;
    margin-right: 1rem;
    border-radius: 50%;
    animation: ${animate} 5s linear infinite;
    animation-duration: calc(120s / var(--i));
  }
`;

const AboutMain = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  height: 88%;
  width: 80%;

  z-index: 3;

  p {
    color: white;
    line-height: 3rem;
    font-size: 18px;
    font-weight: 400;
  }
`;
const AboutContentWrapper = styled.div`
  max-width: 800px;
  position: relative;
  height: 99%;
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  p,
  h1 {
    font-family: Georgia, "Times New Roman", Times, serif;
  }
`;
const AlignItemRight = styled.div`
  width: 100%;
  min-height: 140px;
  z-index: 2;

  p {
    display: block;
    margin-left: auto;
    border: 1px solid white;
    max-width: 400px;
    padding: 0.5rem;
    line-height: 40px;
    letter-spacing: 0.5px;
    @media only screen and (max-width: 603px) {
      line-height: 26px;
      font-size: 15px;
      font-weight: 300;
    }
    @media only screen and (max-width: 360px) {
      line-height: 26px;
      font-size: 14px;
    }
  }
`;
const AlignItemLeft = styled.div`
  width: 100%;
  z-index: 2;

  p {
    display: block;
    border: 1px solid white;
    text-align: center;
    padding: 0.5rem;
    line-height: 36px;
    max-width: 500px;
    letter-spacing: 0.7px;
    @media only screen and (max-width: 603px) {
      line-height: 27.5px;
      font-size: 15px;
    }
    @media only screen and (max-width: 360px) {
      line-height: 25px;
      font-size: 14px;
    }
  }
`;
const style = {
  position: "absolute",
  top: "10px",
  left: "-5px",
  color: "grey",
  fontSize: "55px",
  letterSpacing: "1.3px",
  zIndex: "1",
  top: "133px",
  left: "100px",
};
const AnimateDivLeft = motion(AlignItemLeft);
const AnimateDivRight = motion(AlignItemRight);

const About = () => {
  return (
    <Box>
      <Logo theme="dark" />
      <PowerButton />
      <SocialMediaIcons myskills={true} theme="dark" />

      <Background>
        {bubbleData.map((e, index) => {
          return <span key={index + 300} style={{ "--i": `${e}` }}></span>;
        })}
      </Background>

      <AboutMain>
        <AboutContentWrapper>
          <h1 style={style}>ABOUT</h1>
          <AnimateDivRight
            initial={{ scale: 0, rotate: 360 }}
            transition={{
              type: "spring",
              duration: 0.4,
              delay: 0.2,
            }}
            animate={{ scale: 1, rotate: 0 }}
          >
            <p>
              Hi, I'm Himanshu Lilhare, a full-stack developer with a passion
              for building innovative web applications.
            </p>
          </AnimateDivRight>
          <AnimateDivLeft
            initial={{ x: -1000, scale: 0.5 }}
            transition={{
              type: "spring",
              duration: 0.8,
              delay: 0.2,
            }}
            animate={{ x: 0, scale: 1 }}
          >
            <p>
              My expertise spans both front-end and back-end development,
              allowing me to take a holistic approach to building web
              applications. I have extensive experience with JavaScript as well
              as frameworks like React, Node.js. I'm comfortable working with
              databases such as MySQL and MongoDB, and I have experience
              deploying applications on AWS and other cloud platforms.
            </p>
          </AnimateDivLeft>
          <AnimateDivRight
            initial={{ scale: 0, rotate: 360 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.2,
            }}
            animate={{ scale: 1, rotate: 0 }}
          >
            <p>
              When I'm not coding, you can find me in Gym with Lifting heavy
              Dumbles or chilling with friends
            </p>
          </AnimateDivRight>
        </AboutContentWrapper>
      </AboutMain>
    </Box>
  );
};

export default About;

{
  /* <p>
Hi, I'm Himanshu Lilhare, a full-stack developer with a passion for
building innovative web applications.
</p>

<p>
My expertise spans both front-end and back-end development, allowing
me to take a holistic approach to building web applications. I have
extensive experience with JavaScript as well as frameworks like React,
Node.js. I'm comfortable working with databases such as MySQL and
MongoDB, and I have experience deploying applications on AWS and other
cloud platforms. What I love most about programming is the ability to
solve complex problems and bring ideas to life. Whether I'm building a
user interface from scratch or optimizing server performance, I'm
always looking for ways to improve the user experience .
</p>
<p>
When I'm not coding, you can find me in Gym with Lifting heavy Dumbles
or chilling with friends. I'm always looking for new challenges and
opportunities to grow as a developer, and I'm excited to see what
the future holds.
</p> */
}

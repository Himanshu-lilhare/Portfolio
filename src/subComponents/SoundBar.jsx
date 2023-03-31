import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import song from "../assets/audio/music.mp3";
import { FaPlay } from "react-icons/fa";
import { darkTheme } from "../components/Themes";
import { useLocation } from "react-router-dom";


const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  color: white;
  width: 29px;
  height: 25px;
  top: 2.7rem;
  left: 14rem;
  z-index: 1000000000000000;
  & > *:nth-child(even) {
    animation-delay: 0.7s;
  }
  @media only screen and (max-width: 600px) {
    position: fixed;
    top: 5rem;
    left: 0.5rem;
  }
`;
const subBox = styled.div`
  width: 100%;
  height: 100%;
`;
const updown = keyframes`
    0%{
       transform:scaleY(1);
    }
   50%{
    transform:scaleY(2);
    }
    100%{
        transform:scaleY(1);
    }
 `;
const Line = styled.span`
  background-color: black;
  border: 1px solid white;
  height: 20px;
  width: 1px;
  margin-right: 3px;
  animation: ${updown} 2s linear infinite;
  animation-play-state: "running";
`;
const chotaBada = keyframes`
  0%{
     transform:scaleY(0);
  }
  50%{
    transform: scale(0.8);
  }
 100%{
      transform:scaleY(0);
  }
`;
const PlayM = styled.p`
  position: absolute;
  top: 3.6rem;
  left: 13.7rem;
  z-index: 10;
  letter-spacing: 2px;
  animation: ${chotaBada} infinite 1.5s linear;
  @media only screen and (max-width: 600px) {
    top: 6.2rem;
    left: 0.2rem;
  }
`;

const SoundBar = (props) => {
  const [play, setplay] = useState(false);

  const ref = useRef(null);
  const location = useLocation();

  function handlePlay() {
    setplay(!play);

    !play ? ref.current.play() : ref.current.pause();
  }
  return (
    <Box onClick={handlePlay}>
      {play
        ? [...Array(5)].map(() => {
            return <Line play={play}></Line>;
          })
        : (location.pathname === "/projects" && (
            <FaPlay
              style={{
                color: "black",
              }}
            />
          )) ||
          (location.pathname === "/skills" && (
            <FaPlay
              style={{
                color: "white",
              }}
            />
          )) || (
            location.pathname==='/about' &&
            <FaPlay
              style={{
                color: "white",
              }}
            />
          ) || (
            <FaPlay
              style={{
                color: props.theme === "dark" ? darkTheme.text : darkTheme.body,
              }}
            />
          )}
      <audio src={song} ref={ref} loop />
    </Box>
  );
};

export default SoundBar;

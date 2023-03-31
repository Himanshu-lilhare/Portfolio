import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PowerButtons = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fcf6f4;
  border-radius: 50%;
  border: 1px solid black;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: rgba(0, 255, 0, 0.5);
    box-shadow: 0 0 8px 10px rgba(0, 255, 0, 0.2);
  }
  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
  @media only screen and (max-width: 791px) {
    width: 1.9rem;
    height: 1.9rem;
  }
`;
const PowerButton = () => {
  return (
    <PowerButtons>
      <Link to="/" style={{ width: "100%" }}>
        <FaPowerOff style={{ width: "70%", height: "70%" }} />
      </Link>
    </PowerButtons>
  );
};

export default PowerButton;

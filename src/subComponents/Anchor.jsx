import React, { useRef } from "react";
import { FaAnchor, FaLink } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;
const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  transform: translateY(-50%);

  .chain {
    transform: rotate(135deg);
  }
`;

const Anchor = () => {
  const ref = useRef(null);

  return (
    <Container>
      <Slider ref={ref}>
        {[...Array(25)].map((e, index) => {
          return <FaLink id={index + 200} fontSize={25} className="chain" />;
        })}
        <FaAnchor style={{ fontSize: "70px" }} />
      </Slider>
    </Container>
  );
};

export default Anchor;

import React from "react";
import styled from "styled-components";

function Carousel({ number, title, desc, cardStyle, zIndex }) {
  return (
    <CarouselContainer style={{ zIndex: zIndex }} className={cardStyle}>
      <p>{number}</p>
      <h6>{title}</h6>
      <p>{desc}</p>
    </CarouselContainer>
  );
}

export default Carousel;

const CarouselContainer = styled.div`
  width: 60%;
  /* height: 300px; */
  position: absolute;
  color: var(--gray-800);
  background-color: #f6faff;
  padding: 64px 24px;
  border-radius: 12px;
  /* align-self: flex-start; */
  & p:first-child {
    margin-bottom: 32px;
    font-size: clamp(12px, 5vw, 16px);
  }
  & h6 {
    /* font-size: 15px; */
    margin-bottom: 8px;
  }
  & p:last-child {
    font-size: clamp(14px, 5vw, 16px);
  }
  @media screen and (max-width: 900px) {
    width: 70%;
  }
  @media screen and (max-width: 600px) {
    width: 70%;
  }
`;

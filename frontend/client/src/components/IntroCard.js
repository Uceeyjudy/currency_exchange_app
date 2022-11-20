import React from "react";
import styled from "styled-components";

function IntroCard({ img, title, content }) {
  return (
    <IntroCardContainer>
      <Icon>
        <img src={img} alt="" />
      </Icon>

      <Text>
        <h6>{title}</h6>
        <p>{content}</p>
      </Text>
    </IntroCardContainer>
  );
}

export default IntroCard;

const IntroCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  & p {
    font-size: 16px;
  }

  @media screen and (max-width: 1195px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const Icon = styled.div`
  /* padding: 10px; */
`;
const Text = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

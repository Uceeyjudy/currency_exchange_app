import React from "react";
import styled from "styled-components";

function Benefit({ img, content }) {
  return (
    <BenefitWrapper>
      <img src={img} alt="" />
      <p>{content}</p>
    </BenefitWrapper>
  );
}

export default Benefit;

const BenefitWrapper = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;
  & p {
    font-size: clamp(14px, 5vw, 18px);
    margin-bottom: 0px;
    font-weight: 600;
    /* display: none; */
  }
`;

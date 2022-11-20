import React from "react";
import styled from "styled-components";

const Value = (props) => {
  return (
    <>
      <StyledValue>
        {props.icon}
        <StyledHeading>{props.heading}</StyledHeading>
        <StyledText>{props.text}</StyledText>
      </StyledValue>
    </>
  );
};

export default Value;

const StyledValue = styled.div`
  max-width: 274px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledHeading = styled.h2`
font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin: 20px 0;
`;

const StyledText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  /* text-align: center; */
`;

import React from "react";
import styled from "styled-components";
import down from "../Pages/Careers/assets/down.svg";
function Button({ cta, children }) {
  return (
    <>
      {cta ? (
        <Applybtn>{children}</Applybtn>
      ) : (
        <HeroBtn>
          {children} <img src={down} alt="down arrow" />
        </HeroBtn>
      )}
    </>
  );
}

export default Button;

const HeroBtn = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  background-color: var(--primary);
  padding: 14px 20px;
  gap: 6px;
  border-radius: 5px;
  &:hover {
    background-color: #5496ff;
  }
  &:focus {
    background-color: #0046b5;
  }
`;

const Applybtn = styled.button`
  display: flex;
  gap: 6px;
  align-items: center;
  outline: none;
  border: none;
  background-color: var(--primary);
  padding: 14px 20px;
  &:hover {
    background-color: #5496ff;
  }
  &:focus {
    background-color: #0046b5;
  }
`;

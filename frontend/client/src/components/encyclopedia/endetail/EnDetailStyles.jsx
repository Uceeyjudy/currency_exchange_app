import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-content;
  background-color: #ffffff;
  width: 80%;
  height: 471px;
  align-items: center;
  margin: 111px 30% 81px 10%;
  padding: 24px;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    height: 325px;
    width: 85%;
    margin: 65px 0px 0px 10px;
  }
`;
export const Wrap = styled.span`
  box-sizing: border-content;
  width: 100%;
  height: 471px;
  align-items: center;

  @media screen and (min-width: 350px) (max-width: 550px) {
    height: 398px;
  
  }
`;
export const Text= styled.p`

  align-items: center;

  @media screen and (min-width: 350px) (max-width: 550px) {
    height: 398px;
    padding: 1em;
  }
`;
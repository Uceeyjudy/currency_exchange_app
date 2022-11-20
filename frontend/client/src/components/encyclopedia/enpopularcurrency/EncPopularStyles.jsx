import styled from "styled-components";

export const CurrencyContainer = styled.div`

  width: 100%;
  height: 263px;
  align-items: center;
  background: #e6efff;

  @media screen and (max-width: 768px) {
    height: 832px;
  }
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 0px 0px 200px;
  align-items: center;

  @media screen and (min-width: 350px) and (max-width: 768px) {
    padding: 0px 0px 0px 10px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    // background-color: red;
    margin: 0px;
  }
`;

export const Header = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #1e293b;
  padding: 47px 0px 28px 120px;

  @media screen and (max-width: 768px) {
    padding: 47px 0px 28px 10px;
    margin-right: 1em;
    font-size: 1.8em;
    cursor: pointer;
  }
`;



export const ImageWrapper = styled.div`
  height: 470px;
  width: 50%;
  margin: 22px 41.07 22px 0px;
  @media screen and (max-width: 768px) {
    padding: 1em;
  }
`;
export const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.001em;
  color: #2f343f;

  @media screen and (max-width: 768px) {

    font-size: 1.2em;
   
  }
`;

export const Image = styled.img`
  height: 50px;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

import styled from "styled-components";

export const CurrencyContainer = styled.div`
  width: 100%;
  height: 616px;
  align-items: center;
  background: #ffffff;

  @media screen and (min-width: 350) and (max-width: 750px) {
    padding: 10px 16.66px 56px 16px;
    height: 893px;
  }
`;

export const Header = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  padding: 96px 0px 0px 120px;
  line-height: 28px;
  color: #1e293b;

  @media screen and (max-width: 768px) {
    margin-right: 1em;
    font-size: 1.8em;
    padding: 6px 0px 0px 10px;
  
`;
export const CurrencyWrapper = styled.div`
  width: 50%;
  padding: 0px 0px 0px 200px;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0px 0px 0px 10px;
    height: 60px;
  }
`;


export const ImageRateWrapper = styled.div`
  height: 50%;
  width: 50%;
  margin: 75px 0px 137.11px 10%;
  @media screen and (max-width: 768px) {
    padding: 1em;
    margin: 0px;
    height: 20%;
    width: 70%;
  }
`;
export const ImageWrapper = styled.div`
  // height: 227px;
  width: 100%;
  margin: 75px 0px 137.11px 120px;
  @media screen and (max-width: 768px) {
    padding-right: 20em;
   margin: 5px 0px 5px 20px
    height: 20%;
    width: 5%;
  }
`;

 export const ImageTable = styled.img`
  //  height: 100%;
  //  width: 100%;
   @media screen and (max-width: 768px) {
     height: 20%;
     width: 70%;
   }
 `;


export const RateWrapper = styled.div`
  align-items: center;
  height: 286px;
  justify-content: space-between;
  display: flex;
  margin-top:49px;

  @media screen and (min-width: 350px) and (max-width: 750px) {
    height: 686px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;






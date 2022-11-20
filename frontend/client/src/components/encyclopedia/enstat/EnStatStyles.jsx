import styled from "styled-components";
export const CurrencyContainer = styled.div`
  width: 50%;
  height: 762px;
  align-items: center;
  background: #ffffff;


  @media screen and (max-width: 768px) {
    padding: 1em;
  
  }
`;

export const Header = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  color: #4c4f59;
  width: 356px;
  margin: 81px 0px 0px 435px;

  @media screen and (max-width: 768px) {
    margin: 29px 0px 59px 10px;
  }
`;

export const Table = styled.div`
  width: 100%;
  margin:48px 0px 148px 50%;


  @media screen and (max-width: 768px) {
    height: 250px;
    margin:0px 16px 0px 50%;
    width:100%;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 445px;
  //  height: 45px;
  @media screen and (max-width: 768px) {
    height: 250px;
    width: 100%;
  }
`;




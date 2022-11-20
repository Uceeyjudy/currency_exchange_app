import React from "react";
import rate from "../assets/encyrate.svg";
import table from "../assets/Updated Table.svg";
import {

   
  CurrencyContainer,
  Header,
  ImageRateWrapper,
  ImageTable,
  ImageWrapper,
  RateWrapper,
 
} from "./EnRateStyles";

const EnCurrenciesRate = () => {
  return (
    <CurrencyContainer>
      <Header>Currencies Rates</Header>
      <RateWrapper>
        <ImageRateWrapper>
          <img src={rate} alt="rate__img" />
        </ImageRateWrapper>

        <ImageWrapper>
          <ImageTable src={table} alt="table__img" />
        </ImageWrapper>
       
      </RateWrapper>
    </CurrencyContainer>
  );
};

export default EnCurrenciesRate;

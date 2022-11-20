import React from "react";
import gbp from "../assets/Flags.svg";
import eur from "../assets/Flag.svg";
import canada from "../assets/canada.svg";
import japan from "../assets/japan.svg";
import usa from "../assets/usa.svg";
import aud from "../assets/aud.svg";


import { Image, Text } from "./EncPopularStyles";
import {
  CurrencyContainer,
  CurrencyWrapper,
  Header,
  ImageWrapper,

 
} from "./EncPopularStyles";

const EnPopCurrencies = () => {
  return (
    <CurrencyContainer>
      <Header>Popular Currencies</Header>
      <CurrencyWrapper>
        <ImageWrapper>
          <Image src={gbp} alt="gbp__img" />
          <Text>GBP-Bristish Pound</Text>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={eur} alt="eur__img" />
          <Text>EUR-Euro</Text>
        </ImageWrapper>
        <ImageWrapper>
          <Image  src={canada} alt="globe__img" />
          <Text>CAD-Canadian Dollar</Text>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={japan} alt="globe__img" />
          <Text>JPY-Japanese Yen</Text>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={usa} alt="globe__img" />
          <Text>USD-US Dollar</Text>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={aud} alt="globe__img" />
          <Text>AUD-Australian Dollar</Text>
        </ImageWrapper>
      </CurrencyWrapper>
    </CurrencyContainer>
  );
};

export default EnPopCurrencies;

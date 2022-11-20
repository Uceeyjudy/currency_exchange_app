import React from "react";
import letter from '../assets/letter.png'
import {
  CounrtryOptionWrapper,
  CountryCurrencyWrapper,
  CountryNames,
  CurrencyContainer,
  CurrencyWrapper,
  Header,
  Indicator,
  Text,
 
} from "./EnCountryStyles";

const EnCountryLetter = () => {
  return (
    <CurrencyContainer>
      <Header>Select a country letter</Header>

      <CounrtryOptionWrapper>
        <Text>A</Text>
        <Text>B</Text>
        <Text>C</Text>
        <Text>D</Text>
        <Text>E</Text>
        <Text>F</Text>
        <Text>G</Text>
        <Text>H</Text>
        <Text>I</Text>
        <Text>J</Text>
        <Text>K</Text>
        <Text>L</Text>
        <Text>M</Text>
        <Text>N</Text>
        <Text>O</Text>
        <Text>P</Text>
        <Text>Q</Text>
        <Text>R</Text>
        <Text>S</Text>
        <Text>T</Text>
        <Text>U</Text>
        <Text>V</Text>
        <Text>W</Text>
        <Text>X</Text>
        <Text>Y</Text>
        <Text>Z</Text>
      </CounrtryOptionWrapper>

      <CurrencyWrapper>
        <Indicator>G</Indicator>
      </CurrencyWrapper>
      <CountryCurrencyWrapper>
        <CountryNames>
          <img src={letter} alt="" /> GBP-Bristish Pound
        </CountryNames>
        <CountryNames>
          <img src={letter} alt="" />
           GBP-Bristish Pound
        </CountryNames>
        <CountryNames>
          <img src={letter} alt="" />
           GBP-Bristish Pound
        </CountryNames>
        <CountryNames>
          <img src={letter} alt="" />
           GBP-Bristish Pound
        </CountryNames>
        <CountryNames>
          <img src={letter} alt="" />
           GBP-Bristish Pound
        </CountryNames>
        <CountryNames>
          <img src={letter} alt="" />
           GBP-Bristish Pound
        </CountryNames>
        <CountryNames>
          <img src={letter} alt="" />
           GBP-Bristish Pound
        </CountryNames>
        <CountryNames>
          <img src={letter} alt="" />
           GBP-Bristish Pound
        </CountryNames>
        <CountryNames>
          <img src={letter} alt="" />
           GBP-Bristish Pound
        </CountryNames>
        <CountryNames>
          <img src={letter} alt="" />
           GBP-Bristish Pound
        </CountryNames>
        <CountryNames>
          <img src={letter} alt="" />
           GBP-Bristish Pound
        </CountryNames>
        <CountryNames>
          <img src={letter} alt="" />
           GBP-Bristish Pound
        </CountryNames>
        <CountryNames>
          <img src={letter} alt="" />
          GBP-Bristish Pound
        </CountryNames>
        <CountryNames>
          <img src={letter} alt="" />
           GBP-Bristish Pound
        </CountryNames>
      </CountryCurrencyWrapper>
    </CurrencyContainer>
  );
};

export default EnCountryLetter;

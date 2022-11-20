import React from 'react';
import { Button, ButtonWrapper, Container, CurrencyContainer,Header, HorizontalRule, Option, Select, Text, TextHighlight } from './EnCurrenChStyles';
import flag from '../assets/canada.svg'


const EnCurrencyCh = ({display,color}) => {
  return (
    <CurrencyContainer display={display} color={color}>
      <Container>
        <Header>Currency set for canadian Dollar (CAD)</Header>
        <img src={flag} alt="" style={{ width: "7%" }} />
        <Text>CAD-Canadian Dollar</Text>
      </Container>

      <HorizontalRule />
      <TextHighlight>Change Currency</TextHighlight>
      <Container>
        <Select name="" id="">
          <Option value="">
            {" "}
            <img src={flag} alt="" style={{ width: "7%" }} /> CAD-canadian
            Dollar
          </Option>
          <Option value="">
            {" "}
            <img src={flag} alt="" style={{ width: "7%" }} /> GEL-Georgian Lari
          </Option>
          <Option value="">
            {" "}
            <img src={flag} alt="" style={{ width: "7%" }} /> GGP-Guernsey Pound
          </Option>
          <Option value="">
            {" "}
            <img src={flag} alt="" style={{ width: "7%" }} /> GHS-Ghanaian Cedi
          </Option>
        </Select>

        <ButtonWrapper>
          <Button>Continue</Button>
        </ButtonWrapper>
      </Container>
    </CurrencyContainer>
  );
};

export default EnCurrencyCh;



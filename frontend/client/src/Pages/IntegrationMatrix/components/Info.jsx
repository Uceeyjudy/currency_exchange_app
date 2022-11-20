import React from "react";
import { Card, CardsContainer, InfoHeading, InfoText, StyledInfo } from "./styled/Info.styled";

import flag from "../assets/flag.svg";
import speed from "../assets/speed.svg";
import data from "../assets/data.svg";

const Info = () => {
  return (
    <StyledInfo>
      <InfoHeading>
        Accurate and reliable real time historical market data API for hundreds of global currencies.
      </InfoHeading>
      <InfoText>
        With over 180+ Countries, Street Rates Currency API is integrated with reputable global sources guranteeing
        accurate and up to date data, providing you with a currency API you can trust.
      </InfoText>
      <CardsContainer>
        <Card>
          <div>
            <img src={flag} alt="flag" />
          </div>
          <p>180+ Countries Covered</p>
          <p>
            Our Exchange rate API is built for developers. We make it easy to plug-in to yout existing software. You’ll
            receive SDKs for Java, NodeJS, PHP and Python.
          </p>
        </Card>
        <Card>
          <div>
            <img src={speed} alt="speed" />
          </div>
          <p>Simple and Quick Implementation</p>
          <p>
            Our Exchange rate API is built for developers. We make it easy to plug-in to yout existing software. You’ll
            receive SDKs for Java, NodeJS, PHP and Python.
          </p>
        </Card>
        <Card style={{ border: "none" }}>
          <div>
            <img src={data} alt="data" />
          </div>
          <p>Accurate and Precise Data to Implement</p>
          <p>
            Our Exchange rate API is built for developers. We make it easy to plug-in to yout existing software. You’ll
            receive SDKs for Java, NodeJS, PHP and Python.
          </p>
        </Card>
      </CardsContainer>
    </StyledInfo>
  );
};

export default Info;

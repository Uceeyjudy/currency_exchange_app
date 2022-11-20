import React from "react";
import  canada from "../assets/canada.svg";
import { Container, Text, Wrap } from "./EnDetailStyles";


const EnCurrency = () => {
  return (
    <Container style={{ backgroundColor: "#F6FAFF"}}>
      <h2
        style={{
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: " 32px",
        }}
      >
        Canadian Dollar
      </h2>
      <Wrap>
        {" "}
        <img src={canada} alt="" style={{ width: "2% " }} /> CAD - Canadian
        Dollar
      </Wrap>
      <Text
        style={{
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: " 24px",
        }}
      >
        The Canadian Dollar is the currency of Canada. currency rankings show
        that the most popular Canadian Dollar exchange rate is the CAD to USD
        rate. The currency code for Dollars is CAD, and the currency symbol is
        $.
      </Text>
    </Container>
  );
};

export default EnCurrency;

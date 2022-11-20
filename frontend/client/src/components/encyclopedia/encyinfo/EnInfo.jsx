import React from "react";
import EnCurrencyCh from "../encurrencychange/EnCurrencyCh";

import {

  CurrencyContainer,
  Header,
} from "./EnInfoStyles";

const EnInfo = () => {
  return (
    <CurrencyContainer>
      <Header>Everything about the Canadian Dollar.</Header>

      <EnCurrencyCh display={"true"} color={"white"}/>
    </CurrencyContainer>
  );
};

export default EnInfo;

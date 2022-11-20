import React from "react";
import table from '../assets/Frame 68.png'
import { CurrencyContainer, Table, Header, Image } from "./EnStatStyles";

const EnStat = () => {
  return (
    <CurrencyContainer>
      <Header>Canadian Dollar Stat</Header>

      <Table>
        <Image src={table} alt="" />
      </Table>
    </CurrencyContainer>
  );
};

export default EnStat;

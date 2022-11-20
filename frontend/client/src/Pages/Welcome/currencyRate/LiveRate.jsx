import React from "react";
import styled from "styled-components";
import countryFlag from "../assets/svg/AudFlag.svg";
import CurrencyCard from "./CurrencyCard";

const Liveprice = () => {
  const CURRENCIES = [
    {
      countryFlag: countryFlag,
      symbol: "AUD",
      countryName: "Australian Dollar",
      BDC: "700",
      BDCPercentage: "+0.8",
      bankRate: "300",
      bankPercentage: "-0.39",
    },
    {
      countryFlag: countryFlag,
      symbol: "AUD",
      countryName: "Australian Dollar",
      BDC: "700",
      BDCPercentage: "+0.8",
      bankRate: "300",
      bankPercentage: "-0.39",
    },
    {
      countryFlag: countryFlag,
      symbol: "AUD",
      countryName: "Australian Dollar",
      BDC: "700",
      BDCPercentage: "+0.8",
      bankRate: "300",
      bankPercentage: "-0.39",
    },
    {
      countryFlag: countryFlag,
      symbol: "AUD",
      countryName: "Australian Dollar",
      BDC: "700",
      BDCPercentage: "+0.8",
      bankRate: "300",
      bankPercentage: "-0.39",
    },
    {
      countryFlag: countryFlag,
      symbol: "AUD",
      countryName: "Australian Dollar",
      BDC: "700",
      BDCPercentage: "+0.8",
      bankRate: "300",
      bankPercentage: "-0.39",
    },
    {
      countryFlag: countryFlag,
      symbol: "AUD",
      countryName: "Australian Dollar",
      BDC: "700",
      BDCPercentage: "+0.8",
      bankRate: "300",
      bankPercentage: "-0.39",
    },
    {
      countryFlag: countryFlag,
      symbol: "AUD",
      countryName: "Australian Dollar",
      BDC: "700",
      BDCPercentage: "+0.8",
      bankRate: "300",
      bankPercentage: "-0.39",
    },
  ];

  const Wrapper = styled.section`
    margin: auto;
    display: flex;
    padding: 0 1rem;
    gap: 50px;
    overflow: hidden;
    padding-bottom: 40px;

    /* THIS IS TO HIDE THE OVERFLOW SCROLL BAR INTHE MACTHES SECTION */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 500px) {
      gap: 24px;
    }
  `;
  return (
    <Wrapper>
      {CURRENCIES.map(
        (
          {
            countryFlag,
            symbol,
            countryName,
            BDC,
            BDCPercentage,
            bankRate,
            bankPercentage,
          },
          index
        ) => (
          <CurrencyCard
            key={index}
            countryFlag={countryFlag}
            countrySymbol={symbol}
            countryName={countryName}
            BDC={BDC}
            BDCPercentage={+BDCPercentage}
            bankRate={bankRate}
            bankPercentage={+bankPercentage}
          />
        )
      )}
    </Wrapper>
  );
};

export default Liveprice;

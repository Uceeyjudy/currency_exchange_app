import React from "react";
import styled from "styled-components";
import arrowUp from "../assets/svg/highRateIcon.svg";
import arrowDown from "../assets/svg/lowRateIcon.svg";

const CurrencyCard = ({
  countryFlag,
  countrySymbol,
  countryName,
  BDC,
  BDCPercentage,
  bankRate,
  bankPercentage,
}) => {
  const CurrencyCardStyle = styled.div`
    border: 1px solid #94a3b8;
    border-radius: 8px;
    padding: 1rem;
    min-width: 240px;

    .country-details {
      display: flex;
      align-items: center;
      gap: 1rem;

      h2 {
        font-weight: 600;
        font-size: 18px;
      }

      span {
        font-size: 10px;
        color: #94a3b8;
      }
    }

    .price-rates {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;

      .price-indicator {
        display: flex;
        align-items: center;
        gap: 24px;

        span {
          font-size: 18px;
          color: #94a3b8;
        }
      }
    }
  `;

  return (
    <CurrencyCardStyle>
      <div className="country-details">
        <img src={countryFlag} alt={countryFlag + "flag"} />
        <div>
          <h2>{countrySymbol}</h2>
          <span>{countryName}</span>
        </div>
      </div>

      <div className="price-rates">
        <div className="price-indicator">
          <img
            src={BDCPercentage > 0 ? arrowUp : arrowDown}
            alt={BDCPercentage > 0 ? arrowUp : arrowDown + "logo"}
          />
          <span>{BDC}</span>
        </div>
        <span>{BDCPercentage + "%"}</span>
      </div>

      <div className="price-rates">
        <div className="price-indicator">
          <img
            src={bankPercentage > 0 ? arrowUp : arrowDown}
            alt={bankPercentage > 0 ? arrowUp : arrowDown + "logo"}
          />
          <span>{bankRate}</span>
        </div>
        <span>{bankPercentage + "%"}</span>
      </div>
    </CurrencyCardStyle>
  );
};

export default CurrencyCard;

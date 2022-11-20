import {
  CardsContainer,
  PlanName,
  PlanPrice,
  PricingCard,
  PricingHeader,
  PricingInfo,
  StyledPricing,
} from "./styled/Pricing.styled";

import check from "../assets/check.svg";
import checkLight from "../assets/checkLight.svg";

const secondCard = {
  backgroundColor: "#0059E8",
  color: "#F8FAFC",
};

const secondCardBtn = {
  color: "#0059E8",
  backgroundColor: "#fff",
};

const Pricing = () => {
  return (
    <StyledPricing>
      <PricingHeader>Select a pricing plan</PricingHeader>
      <PricingInfo>
        Street Rates currency exchange API provides real time trusted exchange rate for you. choose the plan that works
        for you best.
      </PricingInfo>
      <CardsContainer>
        <PricingCard>
          <PlanName>Basic Plan</PlanName>
          <PlanPrice>$0/mth</PlanPrice>
          <ul>
            <li>
              <img src={check} alt="check" />
              <p>35,000 Requests monthly</p>
            </li>
            <li>
              <img src={check} alt="check" />
              <p>Update once daily</p>
            </li>
            <li>
              <img src={check} alt="check" />
              <p>Email and Phone support</p>
            </li>
            <li>
              <img src={check} alt="check" />
              <p>Currency volatility</p>
            </li>
            <li>
              <img src={check} alt="check" />
              <p>Time frame queries</p>
            </li>
            <li>
              <img src={check} alt="check" />
              <p>30 Countries</p>
            </li>
          </ul>
          <button>Select Plan</button>
        </PricingCard>
        <PricingCard style={secondCard}>
          <PlanName>Pro Plan</PlanName>
          <PlanPrice>$20/mth</PlanPrice>
          <ul>
            <li>
              <img src={checkLight} alt="check" />
              <p>500,000 Requests monthly</p>
            </li>
            <li>
              <img src={checkLight} alt="check" />
              <p>Update twice daily</p>
            </li>
            <li>
              <img src={checkLight} alt="check" />
              <p>Email and Phone support</p>
            </li>
            <li>
              <img src={checkLight} alt="check" />
              <p>Currency volatility</p>
            </li>
            <li>
              <img src={checkLight} alt="check" />
              <p>Time frame queries</p>
            </li>
            <li>
              <img src={checkLight} alt="checkt" />
              <p>80 Countries</p>
            </li>
          </ul>
          <button style={secondCardBtn}>Select Plan</button>
        </PricingCard>
        <PricingCard>
          <PlanName>Enterprise Plan</PlanName>
          <PlanPrice>$150/mth</PlanPrice>
          <ul>
            <li>
              <img src={check} alt="check" />
              <p>Unlimited request amount</p>
            </li>
            <li>
              <img src={check} alt="check" />
              <p>Rate update every minute</p>
            </li>
            <li>
              <img src={check} alt="check" />
              <p>24/7 Email and phone support</p>
            </li>
            <li>
              <img src={check} alt="check" />
              <p>Currency volatility</p>
            </li>
            <li>
              <img src={check} alt="check" />
              <p>Time frame queries</p>
            </li>
            <li>
              <img src={check} alt="check" />
              <p>180+ Countries</p>
            </li>
          </ul>
          <button>Select Plan</button>
        </PricingCard>
      </CardsContainer>
    </StyledPricing>
  );
};

export default Pricing;

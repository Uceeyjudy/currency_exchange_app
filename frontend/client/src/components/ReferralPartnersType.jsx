import React from "react";

// styles
import {
  StyledPartnersType,
  Button,
} from "../Pages/Partnerships/styles/ReferralPartners.styles";

// data for introducers and affliate section
import {PartnersTypeArray} from "../Pages/Partnerships/assets/data";

const ReferralPartnersType = () => {
  return (
    <>
      {PartnersTypeArray.map((type) => {
        return (
          <StyledPartnersType key={type.id}>
            <div>
              <h1>{type.header}</h1>
              <p>{type.description}</p>

              <ul>
                {type.list.map((list) => {
                  return <li key={list.id}>{list.text}</li>;
                })}
              </ul>

              <Button padding="60px">Contact us</Button>
            </div>

            <img src={type.icon} alt="icon" height={80} />
          </StyledPartnersType>
        );
      })}
    </>
  );
};

export default ReferralPartnersType;

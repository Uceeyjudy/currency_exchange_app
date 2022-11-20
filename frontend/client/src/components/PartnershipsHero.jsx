import React from "react";
import bgImage from "../Pages/Partnerships/assets/images/bg-image.png";

// styles
import {
  StyledHeroSection,
  HeroContent,
  Button,
} from "../Pages/Partnerships/styles/HeroSection.styles";

const PartnershipsHero = () => {
  return (
    <StyledHeroSection>
      {/* background image */}
      <img src={bgImage} alt="bg-img" />

      {/* hero text */}
      <HeroContent>
        <h1>Affiliate and Referral Partner Programs</h1>
        <h3>
          Help your clients save time and money when making their international
          payments
        </h3>
        <Button padding="70px">Contact us</Button>
      </HeroContent>
    </StyledHeroSection>
  );
};

export default PartnershipsHero;

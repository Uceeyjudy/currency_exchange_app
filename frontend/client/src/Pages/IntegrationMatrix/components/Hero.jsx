import { BtnsContainer, LeftSection, RightSection } from "./styled/Hero.styled";
import { FreeTrialBtn, GetStartedBtn, HeroImage, InfoText, StyledHero, WelcomeText } from "./styled/Hero.styled";

import heroImg from "../assets/heroimg.svg";
const Hero = () => {
  return (
    <StyledHero>
      <LeftSection>
        <WelcomeText>Welcome to the Street Rates API.</WelcomeText>
        <InfoText>
          Accurate and reliable real time historical market data API for hundreds of global currencies.
        </InfoText>
        <BtnsContainer>
          <GetStartedBtn>Get Started</GetStartedBtn>
          <FreeTrialBtn>Start Your Free Trial</FreeTrialBtn>
        </BtnsContainer>
      </LeftSection>
      <RightSection>
        <HeroImage src={heroImg} alt="cards" />
      </RightSection>
    </StyledHero>
  );
};

export default Hero;

import styled from "styled-components";

export const StyledHero = styled.section`
  padding: 0 5.33%;
  padding-top: 4.8rem;
  @media (min-width: 650px) and (max-width: 829px) {
    max-width: 650px;
    margin: 8rem auto;
  }
  @media (min-width: 830px) {
    display: flex;
    justify-content: space-between;
    margin-top: 8rem;
    padding: 0 8.3%;
  }
`;
export const LeftSection = styled.div`
  @media (min-width: 830px) {
    width: 46.58%;
  }
`;
export const WelcomeText = styled.p`
  font-weight: 800;
  font-size: 2.8rem;
  line-height: 3.2rem;
  letter-spacing: -0.02em;
  color: #1e293b;
  margin-bottom: 0.8rem;
  @media (min-width: 830px) {
    font-size: 4.8rem;
    line-height: 5.6rem;
    letter-spacing: -0.002em;
    margin-bottom: 1.6rem;
  }
`;

export const InfoText = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: #334155;
  margin-bottom: 3.2rem;
  @media (min-width: 830px) {
    font-size: 2rem;
    line-height: 2.8rem;
  }
`;

export const BtnsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const GetStartedBtn = styled.button`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.02em;
  color: #f8fafc;
  border-radius: 0.4rem;
  padding: 0.6rem 1.2rem;
  background-color: #0062ff;
  border: none;
  @media (min-width: 830px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
    padding: 1.2rem 1.8rem;
  }
`;

export const FreeTrialBtn = styled.button`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.02em;
  color: #0062ff;
  border-radius: 0.4rem;
  border: 1px solid #0062ff;
  padding: 0.6rem 1.2rem;
  background-color: #fff;
  @media (min-width: 830px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
    padding: 1.2rem 1.8rem;
  }
`;

export const RightSection = styled.div`
  margin-top: 4rem;
  @media (min-width: 830px) {
    margin: 0;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  /* height: 21.7rem; */
  @media (min-width: 830px) {
    width: 38.1rem;
    /* height: 32rem; */
  }
  @media (min-width: 1200px) {
    width: 48.1rem;
  }
`;

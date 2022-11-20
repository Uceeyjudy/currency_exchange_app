import styled from "styled-components";

export const StyledPricing = styled.div`
  margin: 0 10.4%;

  @media (max-width: 356px) {
    width: 100%;
    margin: 0 auto;
  }
  @media (min-width: 1000px) {
    margin: 0 8.3%;
  }
`;

export const PricingHeader = styled.p`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #334155;
  text-align: center;
  margin-bottom: 0.8rem;
  @media (min-width: 1000px) {
    font-size: 2.8rem;
    line-height: 3.2rem;
    letter-spacing: -0.002em;
    margin-bottom: 1.6rem;
  }
`;
export const PricingInfo = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 2.4rem;
  line-height: 1.8rem;
  text-align: center;
  color: #334155;
  @media (min-width: 1000px) {
    font-size: 1.4rem;
    margin: 0 auto;
    line-height: 2rem;
    letter-spacing: 0.001em;
    width: 40%;
    margin-bottom: 3.2rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin: 0 auto;

  flex-direction: row;
  flex-wrap: wrap;
  width: fit-content;
  @media (min-width: 766px) and (max-width: 1000px) {
    /* gap: 2.5%; */
    width: 650px;
    margin: 0 auto;
  }
  @media (min-width: 1001) {
    /* gap: 2.5%; */
    width: 850px;
    margin: 0 auto;
  }
`;

export const PricingCard = styled.div`
  /* width: 94%; */
  width: 27.9rem;
  margin: 0 auto;
  border: 1px solid #d7e8ff;
  background-color: #f1f5f9;
  padding: 2.4rem 4.67rem 1.8rem 4.67rem;
  border-radius: 1.6rem;
  @media (max-width: 320px) {
    width: 100%;
    padding: 2.4rem 1.8rem;
  }
  @media (min-width: 1000px) {
    /* width: 31.583%; */
    width: 37.9rem;
    padding: 3.2rem 6.2rem 2.6rem 6.2rem;
    border-radius: 2rem;
  }
  ul {
    list-style: none;
    li {
      display: flex;
      align-items: center;
      gap: 1.94rem;
      font-weight: 400;
      font-size: 1.031rem;
      line-height: 1.472rem;
      letter-spacing: 0.001em;
      margin-bottom: 1.445rem;
      @media (min-width: 1000px) {
        gap: 2.6rem;
        font-size: 1.4rem;
        line-height: 2rem;
        margin-bottom: 2rem;
      }
    }
  }
  button {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.4rem;
    width: 18.3rem;
    height: 4.1rem;
    background-color: #0062ff;
    color: #f8fafc;
    border: none;
    margin-top: 2.2rem;
    border-radius: 0.294rem;
    @media (max-width: 300px) {
      margin: 0 auto;
      display: block;
      margin-top: 2.2rem;
    }
    @media (min-width: 1000px) {
      width: 24.9rem;
      height: 5.6rem;
      border-radius: 0.4rem;
      margin-top: 3rem;
    }
  }
`;

export const PlanName = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 1.325rem;
  line-height: 1.76rem;
  margin-bottom: 2.8rem;
  @media (min-width: 1000px) {
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin-bottom: 3.9rem;
  }
`;

export const PlanPrice = styled.p`
  font-weight: 700;
  font-size: 2.356rem;
  line-height: 2.94rem;
  letter-spacing: -0.002em;
  text-align: center;
  margin-bottom: 2.4rem;
  @media (min-width: 1000px) {
    font-size: 3.2rem;
    line-height: 4rem;
    margin-bottom: 3.4rem;
  }
`;

import styled from "styled-components";

export const StyledInfo = styled.section`
  margin: 0 5.33%;
  background-color: #f1f5f9;
  margin-top: 4.8rem;
  padding: 3.2rem 2rem;
  border: 1px solid #d7e8ff;
  border-radius: 2rem;

  @media (min-width: 900px) {
    margin: 0 8.33%;
    margin-top: 8rem;
    padding: 4.8rem 10rem;
    padding: 4.8rem 2rem;
  }
`;
export const InfoHeading = styled.p`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #334155;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 900px) {
    font-size: 2.8rem;
    line-height: 3.2rem;
    letter-spacing: -0.002em;
    width: 85%;
  }
`;
export const InfoText = styled.p`
  color: #334155;
  text-align: center;
  margin: 0 auto;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-top: 0.8rem;
  width: 90%;
  @media (min-width: 900px) {
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.001em;
    width: 45%;
    margin-top: 1.6rem;
  }
`;
export const CardsContainer = styled.div`
  margin-top: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 900px) {
    margin-top: 8.2rem;
    width: 100%;
  }
`;
export const Card = styled.div`
  padding: 3.2rem 4rem;
  width: 33.5rem;
  margin: 0 auto;
  border-bottom: 1px solid #cbd5e1;
  @media (min-width: 790px) {
    border: none;
  }
  @media (min-width: 900px) {
    padding: 0;
    padding-top: 1rem;
  }
  @media (min-width: 1300px) {
    border-right: 1px solid #cbd5e1;
  }
  div {
    border: 1px solid #4e97ff;
    background-color: #d7e8ff;
    width: 3.2rem;
    height: 3.2rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    @media (min-width: 900px) {
      width: 4rem;
      height: 4rem;
    }
  }
  p:nth-of-type(1) {
    width: 88%;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.4rem;
    color: #334155;
    margin: 1.6rem 0 0.8rem 0;
    @media (min-width: 900px) {
      margin: 0;
      width: 60%;
      margin-top: 2.4rem;
      margin-bottom: 0.8rem;
    }
  }
  p:nth-of-type(2) {
    width: 91.7224%;
    color: #475569;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    @media (min-width: 900px) {
      font-size: 1.4rem;
      line-height: 2rem;
      letter-spacing: 0.001em;
    }
  }
`;

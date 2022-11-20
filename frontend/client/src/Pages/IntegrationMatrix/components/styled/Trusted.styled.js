import styled from "styled-components";

export const StyledTrusted = styled.section`
  background-color: #f1f5f9;
  padding: 5.33%;
  padding-right: 14.67%;
  margin-top: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 800px) {
    margin: 0;
    margin-top: 8rem;
    padding: 4rem 15.3%;
    padding-right: 12.625%;
  }
  @media (min-width: 1000px) {
    margin: 0;
    margin-top: 8rem;
    padding: 4rem 8.3%;
    padding-right: 10.625%;
  }
`;

export const TrustedBy = styled.p`
  color: #334155;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.8rem;
  display: grid;
  place-items: center;
  border-right: 0.31px solid #475569;
  padding-right: 0.8rem;
  height: 2.2rem;
  word-wrap: normal;
  @media (min-width: 600px) {
    font-size: 2rem;
    line-height: 2.8rem;
    height: 6rem;
    padding-right: 1.2rem;
    border-right-width: 1px;
  }
  @media (min-width: 1200px) {
    font-size: 2.2rem;
    line-height: 2.8rem;
    height: 7rem;
    padding-right: 1.4rem;
    border-right-width: 1px;
  }
`;

export const LogosContainer = styled.div`
  display: grid;
  gap: 2.14rem 2.5rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 6rem;
  }
`;
export const CompanyLogos = styled.img`
  width: 9.1rem;
  height: 1.795rem;

  @media (max-width: 300px) {
    width: 5.2rem;
    height: 2rem;
  }
  @media (min-width: 1000px) {
    width: 10.2rem;
    height: 3rem;
  }
  @media (min-width: 1000px) {
    width: 12.2rem;
    height: 3rem;
  }
`;

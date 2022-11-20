import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #00296b;
  margin-top: 11.97rem;
  color: #f8fafc;
  padding: 6.6rem 1.6rem 0 1.6rem;
  @media (min-width: 700px) {
    margin: 0;
    margin-top: 15rem;
    padding: 5.6rem 4rem 0 4rem;
  }
  @media (min-width: 1200px) {
    margin: 0;
    margin-top: 15rem;
    padding: 5.6rem 12rem 0 12rem;
  }
  div {
    text-align: center;
    @media (min-width: 700px) {
      text-align: left;
    }
    p {
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.3rem;
      font-weight: 7;
      font-size: 1.8rem;
      line-height: 2.4rem;
      margin-bottom: 4.2rem;
      @media (min-width: 700px) {
        justify-content: flex-start;
        margin-bottom: 1.6rem;
      }
      img {
        width: 1.32rem;
        @media (min-width: 700px) {
          display: none;
        }
      }
    }
    ul {
      display: none;
      @media (min-width: 700px) {
        display: block;
        list-style: none;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2rem;
        letter-spacing: 0.001em;
        color: #f8fafc;
      }
      li {
        margin-bottom: 2.4rem;
      }
    }
  }
`;

export const GridContainer = styled.div`
  max-width: 1440px;
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
`;
export const FinalContainer = styled.section`
  display: flex;
  border-top: 1px solid #cbd5e1;
  align-items: center;
  max-width: 1440px;
  justify-content: space-between;
  padding: 3.95rem 0;

  p:nth-of-type(1) {
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 2.4rem;
    @media (max-width: 330px) {
      font-size: 1.6rem;
    }
  }
  p:nth-of-type(2) {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.8rem;
    @media (max-width: 330px) {
      font-size: 1rem;
    }
  }
`;

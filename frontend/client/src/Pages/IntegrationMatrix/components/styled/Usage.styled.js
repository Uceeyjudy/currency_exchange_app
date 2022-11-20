import styled from "styled-components";

export const StyledUsage = styled.section`
  margin: 4.8rem 8%;

  @media (min-width: 800px) {
    margin: 0;
    margin-top: 8rem;
    margin: 8rem 15.277%;
    display: flex;
    justify-content: space-between;
  }
`;
export const LeftSection = styled.div`
  @media (min-width: 800px) {
    width: 40.5rem;
  }
  @media (min-width: 1000px) {
    width: 40.5%;
  }
  p:nth-of-type(1) {
    color: #334155;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin-bottom: 0.8rem;
    @media (min-width: 800px) {
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin-bottom: 2.4rem;
    }
  }
  p:nth-of-type(2) {
    color: #334155;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-bottom: 2.4rem;
    @media (min-width: 800px) {
      font-size: 1.4rem;
      line-height: 2rem;
      letter-spacing: 0.001em;
      margin-bottom: 4rem;
    }
  }
  ul {
    list-style-type: none;
    li {
      display: flex;
      gap: 1.6rem;
      margin-bottom: 2.4rem;

      align-items: center;
      div {
        background-color: #0064f1;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
      }
      span {
        font-weight: 600;
        font-size: 2rem;

        line-height: 1.8rem;
        height: 100%;
        letter-spacing: -0.02em;
        color: #334155;
      }
    }
  }
  a {
    color: #0064f1;
    display: block;
    margin-top: 2.4rem;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: 0.001em;
  }
`;
export const RightSection = styled.div`
  padding: 0;
  margin-top: 4.8rem;
  @media (min-width: 800px) {
    display: grid;
    margin: 0;
    width: 48%;
    place-items: center;
  }
  img {
    width: 24.7rem;
    /* height: 28rem; */
    margin: 0 auto;
    display: block;

    @media (max-width: 320px) {
      width: 78%;
    }
    @media (min-width: 800px) {
      width: 100%;
      height: 34rem;
    }
  }
`;

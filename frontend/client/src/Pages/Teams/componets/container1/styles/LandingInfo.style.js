import styled from "styled-components";

export const LandingInfo = styled.div`
  width: 55%;
  height: 80%;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 10vw;

  h1 {
    width: 90%;
    font-style: normal;
    font-weight: 700;
    font-size: 3.7rem;
    line-height: 72px;
    letter-spacing: -0.04em;
    color: #0f172a;
  }
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #4b4b4b;
  }
  h3 {
    width: 90%;
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 22px;
    color: #555962;
  }
  @media (max-width: 1100px) {
    height: 50%;
    padding: 5vh;
    width: 100%;
    h1{
        width: 60%;
        font-size: 3rem;
    }
    h2{
        /* visibility: hidden; */
    }
    h3{
        width: 80%;
    }
  }
  @media (max-width: 768px) {
    padding: 3vw;
    h1{
        font-size: 2.4rem;
        width: 95%;
        line-height: normal;
    }
    h2{
        /* visibility: hidden; */
    }
    h3{
        width: 95%;
    }
  }
`;

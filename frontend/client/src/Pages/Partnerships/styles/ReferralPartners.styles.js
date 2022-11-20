import styled from "styled-components";

export const Button = styled.button`
  background-color: #1d4ed8;
  color: white;
  padding: 10px ${(props) => props.padding};
  border: none;
  align-self: flex-start;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 5px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const PartnersHeader = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 100px;

  & img {
    margin-bottom: 30px;
  }

  & h1 {
    font-size: 2.1rem;
  }

  @media screen and (max-width: 480px) {
    & h1 {
      font-size: 1.6rem;
    }
  }
`;

export const PartnersDescription = styled.p`
  width: 65%;
  margin: 20px auto 120px;
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    font-size: 1.2rem;
  }
`;

export const StyledPartnersType = styled.div`
  width: 85%;
  margin: 0 auto 100px;
  height: 470px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 70px;

  & div {
    width: 60%;
    height: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    gap: 30px;

    & h1 {
      font-size: 2.1rem;

      @media screen and (max-width: 480px) {
        font-size: 1.6rem;
      }
    }

    & p {
      font-size: 1.5rem;
      line-height: 1.5;

      @media screen and (max-width: 480px) {
        font-size: 1.2rem;
      }
    }

    & ul {
      font-size: 1.5rem;
      list-style-position: inside;

      @media screen and (max-width: 480px) {
        font-size: 1.2rem;
      }

      & li:nth-child(2) {
        margin: 30px 0;
      }
    }
  }

  @media screen and (max-width: 1240px) {
    width: 80%;
    height: auto;
    padding-right: 0;

    & img {
      display: none;
    }

    & div {
      width: 100%;

      & h1 {
        text-align: center;
      }

      & button {
        align-self: center;
      }
    }
  }
`;

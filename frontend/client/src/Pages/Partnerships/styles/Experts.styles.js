import styled from "styled-components";

export const StyledExperts = styled.section`
  background-color: #00296b;
  color: white;
  padding: 40px;
  display: flex;
  justify-content: space-around;
  gap: 10px;

  .expert-profile {
    & h1 {
      margin: 10px 0;
      font-size: 2.1rem;

      @media screen and (max-width: 480px) {
        font-size: 1.6rem;
      }
    }

    & h2 {
      font-size: 2rem;

      @media screen and (max-width: 480px) {
        font-size: 1.5rem;
      }
    }
  }

  .expert-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    & h1 {
      font-size: 1.8rem;

      @media screen and (max-width: 480px) {
        font-size: 1.6rem;
      }
    }

    & p {
      font-size: 1.2rem;
      line-height: 1.5;

      @media screen and (max-width: 480px) {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (max-width: 1240px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;

    .expert-profile {
      text-align: center;
    }

    .expert-details {
      width: 95%;

      & h1 {
        display: none;
      }

      & p {
        width: 90%;
        margin: 0 auto;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .expert-details {
      width: 100%;

      & p {
        width: 100%;
      }
    }
  }
`;

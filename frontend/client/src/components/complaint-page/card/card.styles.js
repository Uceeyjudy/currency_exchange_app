import styled from "styled-components";

const CardWrapper = styled.section`
  margin-top: 70px;
  margin-left: 30px;

  .card-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 35px;
  }

  .card-container {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    border-radius: 12px;
    cursor: pointer;
  }

  .wrapper {
    padding: 48px 32px;
    text-align: center;
  }

  .wrapper h1 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.43rem;
    text-align: center;
    color: #0062ff;
  }

  .wrapper p {
    font-weight: 400;
    font-size: 1.37rem;
    line-height: 1.68rem;
    text-align: center;
    color: #000000;
  }

  @media (max-width: 600px) {
    margin-top: 58px;
    .card-wrapper {
      grid-template-columns: auto;
    }

    .card-container {
      border-radius: 8px;
      margin-right: 30px;
    }
    .wrapper {
      padding: 24px 16px;
      text-align: center;
    }

    .wrapper h1 {
      font-size: 1.5rem;
      line-height: 1.8rem;
      text-align: center;
    }

    .wrapper p {
      font-size: 1rem;
      line-height: 1.1rem;
      text-align: center;
    }

    // @media (min-width: 700px){
    //     .card-wrapper {
    //         grid-template-columns: 1fr 1fr;
    //       }
    // }

`;

export default CardWrapper;

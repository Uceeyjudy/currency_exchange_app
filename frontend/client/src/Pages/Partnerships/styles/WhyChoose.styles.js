import styled from "styled-components";

export const StyledWhyChoose = styled.section`
  padding: 30px 0 200px;

  .header {
    text-align: center;
    font-size: 2.1rem;

    @media screen and (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  .WhyContainer {
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
  }

  .listDiv {
    flex-basis: 350px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    & p {
      margin-top: 5px;
      font-size: 1.5rem;
      line-height: 1.5;

      @media screen and (max-width: 480px) {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (max-width: 1240px) {
    padding-bottom: 50px;

    .WhyContainer {
      flex-direction: column;
      gap: 30px;
      width: 80%;
      margin: 40px auto 0;
    }

    .listDiv {
      align-items: center;
      text-align: center;
    }
  }

  @media screen and (max-width: 500px) {
    .header {
      width: 80%;
      margin: 0 auto;
    }
  }
`;

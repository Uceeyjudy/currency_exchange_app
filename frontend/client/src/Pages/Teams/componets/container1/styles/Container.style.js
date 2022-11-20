import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 80vh;
  display: flex;

  @media (max-width: 1100px) {
    height: 90vh;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const TeamImg = styled.img`
  height: 80%;
  width: 45%;
  @media (max-width: 1100px) {
    width: 100%;
    height: 50%;
  }
  @media (max-width: 768px) {
    height: 50%;
    width: 100%;
    padding: 3vw;
    background-color: #f8fafc;
  }
`;

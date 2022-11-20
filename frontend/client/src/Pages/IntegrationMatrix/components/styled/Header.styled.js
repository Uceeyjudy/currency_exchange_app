import styled from "styled-components";

export const StyledHeader = styled.p`
  background-color: #00296b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4.26%;
  @media (min-width: 600px) {
    padding: 1.8rem 8.33%;
  }
  @media (min-width: 800px) {
    background-color: #fff;
    padding: 2.8rem 8.33%;
  }
`;

export const LeftSection = styled.p`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.8rem;
  color: #fff;
  @media (min-width: 800px) {
    color: #202020;
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.3rem;
  }
`;

export const RightSection = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    color: #6d6d6d;
    gap: 4.4rem;
  }
  p {
    @media (min-width: 800px) {
      font-size: 500;
      font-size: 1.6rem;
      line-height: 1.93rem;
    }
  }
`;

export const MenuContainer = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`;

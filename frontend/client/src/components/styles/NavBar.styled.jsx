import styled from "styled-components";

export const NavWrapper = styled.div`
  position: sticky;
  width: 100%;
  top: 0px;
  height: 70px;
  padding-bottom: 10px;
  background-color: white;
  box-shadow: 1px 1px 2px 2px #a29d9d33;
  margin-bottom: 30px;
  z-index: 999;

  .push {
    padding-bottom: 30px;
    @media screen and (max-width: 768px) {
      padding-top: 15px;
    }
  }
`;

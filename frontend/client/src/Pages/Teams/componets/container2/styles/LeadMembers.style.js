import styled from "styled-components";

export const LeadMembers = styled.div`
  margin-top: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  row-gap: 2rem;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1100px) {
    margin-top: 5vh;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
  }
`;

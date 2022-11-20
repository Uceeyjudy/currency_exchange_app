import styled from "styled-components";

export const Tile = styled.div`
  width: 24rem;
  min-height: 18rem;
  flex-direction: column;
  padding: 2rem;
  border-radius: 16px;
  align-items: flex-start;
  display: flex;
  justify-content: start;
  background-color: #fffefc;

  @media (max-width: 1200px) {
    width: 48%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const DepartmentIcon = styled.img`
  height: 30%;
  margin-bottom: 2rem;
`;

export const DepartmentName = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #555962;
  margin-bottom: 1rem;
`;

export const DepartmentInfo = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #555962;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

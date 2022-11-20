import styled from "styled-components";

export const MemberCard = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  gap: 0.3rem;
  flex-direction: column;
  flex-basis: 24%;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    justify-content: space-between;
    flex-basis: 45%;
  }
`;
export const MemberImage = styled.img`
  width: 100%;
  /* height: 80%; */
`;

export const MemberName = styled.h3`
  margin-top: 0.5rem;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 28px;
  color: #555962;

  @media (max-width: 1100px) {
    font-size: 1rem;
    color: #0F172A;

  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
    white-space: nowrap;
    color: #0F172A;

  }
`;

export const MemberPosition = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #555962;

  @media (max-width: 1100px) {
    font-size: 0.7rem;

  }
  @media (max-width: 768px) {
    font-size: 0.8rem;

  }
`;

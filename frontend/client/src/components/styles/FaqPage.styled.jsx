import styled from 'styled-components';

export const Container = styled.div`
  diaplay: flex;
  flex-direction: col;
  align-content: center
  justify-content: center;
  background: #BBCAF3;
  padding:1.5rem;
  height: 391px;
  
   @media only screen and (min-width: 768px) {
    padding: 5rem
  }
  

`;
export const TextWrapper = styled.div`
  text-align: center;
  padding: 2rem 1.5rem;
`;

export const BigText = styled.h1`
  font-style: normal;
  font-size: 32px;
  letter-spacing: -0.02em;
  color: #06102b;

  @media only screen and (min-width: 992px) {
    font-size: 48px;
  }
`;
export const Paragraph = styled.p`
  margin-top: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.02em;

  @media only screen and (min-width: 992px) {
    font-weight: 34px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 1.5rem;
  position: relative;

  @media only screen and (min-width: 768px) {
    margin-top: 2.5rem;
  }
`;

export const Searchgroup = styled.div`
  width: 700px;
  position: relative;
  & img {
    position: absolute;
    z-index: 50;
    margin-left: 2rem;
    top: 1rem;
  }
  @media only screen and (min-width: 768px) {
    & img {
      position: absolute;
      z-index: 50;
      margin-left: 2rem;
      top: 1.7rem;
    }
  }
`;

export const Search = styled.input.attrs({ type: 'text' })`
  border-radius: 16px;
  font-size: 16px;
  width: 100%;
  border: none;
  padding: 5px 5px 5px 3.5rem;
  height: 50px;
  z-index: 1;

  @media only screen and (min-width: 768px) {
    height: 70px;
  }
`;

export const StyledButton = styled.button`
  border-radius: 5px;
  background: #0062ff;
  border: none;
  margin-left: -5rem;
  color: white;
  padding: 10px;

  @media only screen and (min-width: 768px) {
    padding: 20px;
    margin-left: -6rem;
  }
`;
export const GetInTouch = styled.button`
  border-radius: 5px;
  padding: 8px;
  background: #0062ff;
  border: none;
  color: white;
  font-size: 10px;
  align-self: center;
  width: 48%;
  @media only screen and (min-width: 768px) {
    padding: 20px;
    width: auto;
    font-size: 16px;
  }
`;
export const FaqContainer = styled.section`
  padding: 1rem;
  @media only screen and (min-width: 768px) {
    padding: 2.5rem;
  }

  @media only screen and (min-width: 992px) {
    padding: 5rem;
  }
`;
export const FaqWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
`;
export const Question = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0f172a;
  margin: 12px 0px;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;
export const Answer = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #555962;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  background: #fdf0cb;
  border-radius: 16px;
  justify-content: space-between;
  align-content: center;
  padding: 1rem;
  margin: 5rem 0 0 0;
  @media only screen and (min-width: 992px) {
    padding: 1.5rem;
    margin: 5rem 5rem 0 8rem;
  }
`;

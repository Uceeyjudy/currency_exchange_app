import styled from "styled-components";

export const Alphabet = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 46px 30px;
  h4 {
    margin: 7px 11px;
    color: #00296b;
    font-size: 28px;
    line-height: 32px;
  }

  h3 {
    margin: 7px 11px;
    color: #94a3b8;
    font-size: 28px;
    line-height: 32px;
  }
`;
export const Container = styled.div`
  background: #f5f5f5;
  height: 400px;
`;
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  h3 {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    /* letter-spacing: -0.04em; */
    font-weight: 600;
    font-size: 50px;
    /* line-height: 72px; */
    /* margin-right : 50px; */

    color: #00296b;
  }
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #475569;
  }
`;

export const Head = styled.div`
  h1 {
    font-weight: 600;
    font-size: 60px;
    line-height: 72px;
    text-align: center;
    letter-spacing: --0.4em;
    color: #00296b;
  }
  h4 {
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */

    /* Neutral/Gray 600 */
    margin-top: 20px;

    color: #475569;
  }

  @media screen and (max-width: 834px) {
    h1 {
      font-size: 48px;
      line-height: 56px;
    }
    h4 {
      font-size: 22px;
      line-height: 28px;
    }
  }

  @media screen and (max-width: 375px) {
    h1 {
      font-size: 28px;
      line-height: 32px;
    }
    h4 {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

export const Search = styled.div`
  width: 100%;
  max-width: 584px;
  height: 50px;
  position: relative;
  margin-top: 20px;
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
  }

  input {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 11px 24px;
    padding-left: 50px;
    gap: 10px;

    background: #f8fafc;

    border: 1px solid #64748b;

    box-shadow: 0px 1px 0px #e2e8f0;
    border-radius: 37px;
  }

  @media screen and (max-width: 834px) {
    max-width: 488px;
    height: 39px;
  }

  @media screen and (max-width: 375px) {
    max-width: 253px;
    height: 27px;
  }
`;

export const Parent = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 17px 120px;

  @media screen and (max-width: 834px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 50px 80px;
  }
  @media screen and (max-width: 375px) {
    padding: 50px 17px;
  }
`;
//
export const Box = styled.div`
  min-width: 243px;
  max-width: 243px;
  margin-right: 20px;
  h4 {
    letter-spacing: -0.02em;
    color: #00368c;
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
    font-family: "Inter";
    border-bottom: 1px solid #94a3b8;
    padding-bottom: 18px;
    padding-top: 18px;
  }

  @media screen and (max-width: 834px) {
    min-width: 181px;
    max-width: 181px;
    h4 {
      font-size: 24px;
      line-height: 28px;
    }
    span {
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media screen and (max-width: 375px) {
    min-width: 90px;
    max-width: 90px;

    h4 {
      font-size: 14px;
      line-height: 20px;
    }
    span {
      font-weight: 600;
      font-size: 12px;
    }
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  span {
    font-family: "Inter";
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #475569;
    margin-bottom: 20px;
  }

  span {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 834px) {
    span {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 375px) {
    span {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

export const Header = styled.div`
  background-color: #f6faff;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 437px;
  flex-direction: column;
  position: relative;
`;
export const ImageLeft = styled.div`
  position: absolute;
  left: 115px;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  @media screen and (max-width: 834px) {
    left: 30px;
  }
  @media screen and (max-width: 375px) {
    left: 10px;
  }
`;
export const ImageRight = styled.div`
  position: absolute;
  right: 115px;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }

  @media screen and (max-width: 834px) {
    right: 30px;
    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
    }
  }
  @media screen and (max-width: 375px) {
    right: 10px;
    img {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
  }
`;
export const LeftTop = styled.div`
  margin-left: 100px;
`;
export const LeftMiddle = styled.div``;
export const LeftBottom = styled.div`
  margin-left: 100px;
`;
export const RightTop = styled.div`
  margin-left: -100px;
`;
export const RightMiddle = styled.div``;
export const RightBottom = styled.div`
  margin-left: -100px;
`;

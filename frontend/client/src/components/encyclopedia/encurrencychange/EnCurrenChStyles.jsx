import styled from "styled-components";

export const CurrencyContainer = styled.div`
  width: 45%;
  height: 378px;
  margin: 0px 60px 0px 0px;

  border-radius: 4px;
  display: ${({ display }) => (display ? "" : "none")};
  background: ${({ color }) => (color ? "white" : " #f6faff")};

  @media screen and (min-width: 350px) and (max-width: 800px) {
    display: block;
    display: ${({ display }) => (!display ? "block" : "none")};
    height: 468px;
    width: 90%;
    margin: 60px 16px 54px 16px;
  }
`;
export const Container = styled.div`
  height: 144px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 1em;
  }
`;

export const Header = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #131825;

  @media screen and (max-width: 768px) {
    margin-right: 1em;
    font-size: 1.8em;
    cursor: pointer;
  }
`;

export const Text = styled.p`
  color: #2f343f;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  @media screen and (max-width: 768px) {
  }
`;

export const HorizontalRule = styled.hr`
  border: 1px solid #cbd5e1;

  @media screen and (max-width: 768px) {
  }
`;

export const TextHighlight = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #131825;
  padding-left: 18px;
  @media screen and (max-width: 768px) {
  }
`;

export const Select = styled.select`
  background: #f6faff;
  opacity: 0.56;
  border-radius: 4px;
  height: 56px;
  width: 32%;

  @media screen and (max-width: 768px) {
    height: 56px;
  }
`;

export const Option = styled.option`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #2f343f;
  letter-spacing: 0.001em;

  @media screen and (max-width: 768px) {
  }
`;

export const Button = styled.button`
  background: #0062ff;
  border-radius: 4px;
  border: 1px solid #0062ff;
  width: 107px;
  height: 48px;
  color: #f8fafc;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  @media screen and (max-width: 768px) {
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 38px;
  @media screen and (max-width: 768px) {
    margin-top: 26px;
  }
`;

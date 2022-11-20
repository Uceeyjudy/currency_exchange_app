import React from 'react';
import styled from 'styled-components';

const FaqCard = ({ data }) => {
  return (
    <Container>
      <img src={data.img} alt='ExchangeIcon' />
      <Question>{data.quest}</Question>
      <Answer>{data.answer}</Answer>
    </Container>
  );
};

const Container = styled.div`
  diaplay: flex;
  flex-direction: col;
  justify-content: center;
  align-items: center;
  border: 2px solid #cbd5e1;
  border-radius: 8px;
  padding: 16px 8px;
`;
const Question = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #0f172a;
  margin: 12px 0px;
`;
const Answer = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #555962;
`;

export default FaqCard;

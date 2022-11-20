import React, { useState } from 'react';
import SearchIcon from './assets/searchIcon.svg';
import FaqCard from '../../components/FaqCard';
import { faqData } from './FaqData';

import {
  Container,
  TextWrapper,
  BigText,
  Paragraph,
  SearchWrapper,
  Searchgroup,
  Search,
  FaqContainer,
  FaqWrapper,
  StyledButton,
  Wrapper,
  Question,
  Answer,
  GetInTouch,
} from '../../components/styles/FaqPage.styled';

const Faq = () => {
  const [searchField, setSearchField] = useState('');

  const filteredFaq = faqData.filter((faq) => {
    return (
      faq.quest.toLowerCase().includes(searchField.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  return (
    <div>
      <Container>
        <TextWrapper>
          <BigText>Frequently Asked Questions</BigText>
          <Paragraph>Have any question? We are here to assist you.</Paragraph>
        </TextWrapper>
        <SearchWrapper>
          <Searchgroup>
            <img src={SearchIcon} alt='searchIcon' />
            <Search placeholder='Search FAQs' onChange={handleChange} />
            <StyledButton onClick={handleChange}>Search</StyledButton>
          </Searchgroup>
        </SearchWrapper>
      </Container>
      <FaqContainer>
        <FaqWrapper>
          {filteredFaq.map((faq, index) => (
            <FaqCard data={faq} key={index} />
          ))}
        </FaqWrapper>
        <Wrapper>
          <div>
            <Question>Still have questions?</Question>
            <Answer>
              Can’t find answer you’re looking for? Please chat our support
              team.
            </Answer>
          </div>
          <GetInTouch>Get in touch</GetInTouch>
        </Wrapper>
      </FaqContainer>
      <div></div>
    </div>
  );
};

export default Faq;

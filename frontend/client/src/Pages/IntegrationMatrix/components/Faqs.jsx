import { FaqsHeading, Question, StyledFaqs } from "./styled/Faqs.styled";
import plus from "../assets/500px-Plus_symbol.svg.png";

const Faqs = () => {
  return (
    <StyledFaqs>
      <FaqsHeading>Frequently asked questions</FaqsHeading>
      <Question>
        <p>What is Street Rate API?</p>
        <img src={plus} alt="plus" />
      </Question>
      <Question>
        <p>How Secure is Street Rates API?</p>
        <img src={plus} alt="plus" />
      </Question>
      <Question>
        <p>How do i get started?</p>
        <img src={plus} alt="plus" />
      </Question>
      <Question>
        <p>How do i go Live?</p>
        <img src={plus} alt="plus" />
      </Question>
    </StyledFaqs>
  );
};

export default Faqs;

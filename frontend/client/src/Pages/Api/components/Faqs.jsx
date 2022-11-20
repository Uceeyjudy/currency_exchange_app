import styled from "styled-components";
import { useState } from "react";

const StyledFaqs = styled.section`
  padding: 6rem 20rem;
  width: 100vw;
  background-color: #f1f5f9;
  h4 {
    font-size: 2.8rem;
    margin-bottom: 4.3rem;
  }
  li {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    &:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
  .reveal-trigger {
    position: relative;
    width: 5rem;
    height: 5rem;
    display: grid;
    place-items: center;
    transition: 0.5s;

    div {
      position: absolute;
      background-color: #0a17a7;
      width: 0.4rem;
      height: 2.4rem;
      border-radius: 0.1rem;

      &:nth-child(1) {
        transform: rotate(90deg);
      }
    }
  }
  @media only screen and (max-width: 87rem) {
    background-color: #fff;
    padding: 6rem 10rem;
  }
  @media only screen and (max-width: 42rem) {
    padding: 4rem 2.4rem;
    background-color: #f1f5f9;
    h4 {
      font-size: 2.2rem;
    }
    li {
      gap: 1.6rem;
    }
  }
`;

export const Faqs = () => {
    const [faqs, setFaqs] = useState([
        {
            id: 1,
            question: 'How to get access to the API?',
            isOpen: false,
        },
        {
            id: 2,
            question: 'How does it work?',
            isOpen: false,
        },
        {
            id: 3,
            question: `Can't find what you are looking for?`,
            isOpen: false,
        },
    ])
    const handleReveal = (faq) => {
        setFaqs(faqs.map(j => {
            if (j.id === faq.id && !j.isOpen) {
                return { ...j, isOpen: true }

            } else if (j.id === faq.id && j.isOpen) {
                return { ...j, isOpen: false }
            } else {
                return { ...j, isOpen: false }
            }
        }))
    }
    return (
        <StyledFaqs>
            <h4>Frequently Asked Questions</h4>
            <ul>
                {
                    faqs.map((i) => {
                        return (
                            <li key={i.id} onClick={() => handleReveal(i)}>
                                <div className="reveal-trigger" style={{ transform: `${i.isOpen ? 'rotate(45deg)' : 'rotate(0)'}` }}>
                                    <div></div>
                                    <div></div>
                                </div>
                                <p>{i.question}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </StyledFaqs>
    )
}
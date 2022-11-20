import styled from "styled-components";

export const Container = styled.section`
  padding: 0 1rem;
  max-width: 1536px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const HeroSection = styled.div`
  background: url("/assets/png/contact-bg-mobile.png") center/cover;
  min-height: 343px;
  min-height: 298px;
  margin: 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    display: none;
  }
  @media (min-width: 768px) {
    background: url("/assets/png/contact-bg-desktop.png") center/cover;
    margin: 0;
    min-height: 331px;

    h1 {
      display: block;
      font-size: 44px;
      color: white;
      font-weight: 600;
    }
  }

  @media (min-width: 1200px) {
    min-height: 400px;

    h1 {
      font-size: 52px;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  margin-bottom: 4.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 2rem;
    padding: 4rem 2rem;
    justify-content: space-between;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    padding: 4rem 6rem 4.5rem;
  }
`;

export const FormSection = styled.div`
 .successMessage-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);

    p {
      background: white;
      height: 200px;
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      border-radius: 10px;
    }
  }
  h2 {
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }

  p {
    color: #4b4b4b;
    font-size: 14px;
  }

  form {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 14px;
    width: 100%;

    label {
      font-weight: 500;
      margin-bottom: 4px;
      display: block;
    }

    input,
    textarea {
      padding: 16px 12px;
      border: 1px solid #d1d5db;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 6px;
      width: 100%;
    }

    input::placeholder,
    textarea::placeholder {
      font-size: 14px;
    }

    textarea {
      height: 224px;
      padding: 10px 12px;
    }

    button {
      padding: 1.25rem 0;
      width: 60%;
      color: #fafafa;
      margin-top: 1rem;
      font-size: 1.125rem;
      font-weight: 600;
      border-radius: 5px;
      border: none;
      background: #00296b;
    }

    button:disabled {
      background: #e2e8f0;
    }
  }

  @media (min-width: 768px) {
    min-width: 470px;

    h2 {
      font-size: 31px;
    }
    p {
      width: 70%;
    }

    form {
      width: 50%;

      textarea {
        height: 195px;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 80%;

    h2 {
      font-size: 40px;
    }
    p {
      font-size: 1rem;
    }

    form {
      max-width: 375px;

      textarea {
        height: 195px;
      }
    }
  }
`;

export const ContactInfoStyle = styled.div`
  padding: 1.5rem 1rem 2.875rem;
  border-top: 1px solid #a6a6a6;
  border-bottom: 1px solid #a6a6a6;
  margin: 0 -1rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
  }

  .contact-details {
    padding-bottom: 2.875rem;

    div {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 1.75rem;
      color: #4b4b4b;
    }
  }

  .social-media {
    border-top: 1px solid #a6a6a6;
    padding: 1.5rem 1rem 0;
    margin: 0 -1rem;

    p {
      margin: 1rem 0;
      color: #4b4b4b;
    }

    a {
      margin-right: 1.25rem;
    }
  }

  @media (min-width: 768px) {
    border: none;
    padding: 0;
    margin: 0;

    width: 40%;

    .contact-details {
      padding-bottom: 4.6875rem;

      div {
        margin-top: 1.5625rem;

        span {
          font-size: 14px;
        }
      }
    }

    .social-media {
      border: none;

      p {
        font-size: 14px;
      }

      a {
        margin-right: 1.5rem;
      }
    }
  }

  @media (min-width: 1024px) {
    h3 {
      font-size: 31px;
    }

    .social-media {
      border: none;

      p {
        margin: 20px 0 32px;
      }

      a {
        margin-right: 2rem;
      }
    }
  }

  @media (min-width: 1200px) {
    h3 {
      font-size: 40px;
    }

    .contact-details div > span,
    .social-media p {
      font-size: 1rem;
    }
  }
`;
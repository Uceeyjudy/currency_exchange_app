import styled from "styled-components";

export const LoginSection = styled.section`
  background-color: #e6efff;
  height: 100vh;
  border: 1px solid transparent;

  .login-modal {
    width: 93%;
    max-width: 32rem;
    margin: auto;
    margin-top: 7rem;
    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 2.5rem;
      line-height: 1.5rem;
      text-align: center;
      margin-bottom: 1.5rem;
      color: #0f172a;
      span {
        color: #0062ff;
      }
    }

    .signup {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.8rem;
      .signup-btn {
        margin-left: 0.4rem;
        color: #0062ff;
        font-weight: bold;
      }
    }

    form {
      display: block;
      text-align: left;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2rem;
      gap: 1rem;

      .login-pass-check {
        display: flex;
        label {
          margin-left: 0.4rem;
          color: #0f172a;
        }
      }

      button {
        display: block;
        width: 100%;
        padding: 1rem 2rem;
        color: #fff;
        border: none;
        font-size: 1rem;
        font-weight: bold;
        background: #0062ff;
        border-radius: 4px;
      }

      p {
        color: #0062ff;
        margin: unset;
        margin: 0.3rem 0;
      }

      h1 {
        font-size: 1.8rem;
        margin: unset;
        margin-top: 0.5rem;
      }

      .login-form-field {
        display: flex;
        margin-top: 0.5rem;
        flex-direction: column;
        width: 100%;
        color: #475569;

        input {
          margin-top: 0.3rem;
          display: block;
          font-size: 1rem;
          padding: 0.8rem 0.4rem;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
        }

        .password-field {
          display: flex;
          position: relative;
          input {
            width: 100%;
          }
          .view-icon {
            position: absolute;
            height: calc(100% - 0.5rem);
            bottom: 0;
            right: 0.2rem;
            width: 3rem;
            border: none;
            margin-left: -0.1rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
`;

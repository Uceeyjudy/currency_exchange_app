import styled from 'styled-components'
import bg from '../assets/bg.png'

const StyledBenefits = styled.section`
  width: 100vw;
  padding: 6rem 12rem;
  background: linear-gradient(
      0deg,
      rgba(245, 246, 248, 0.3),
      rgba(245, 246, 248, 0.3)
    ),
    url(${bg});
  height: 65rem;
  background-position: center;
  background-size: cover;
  position: relative;
  div {
    padding: 6rem 4rem;
    background-color: #f8fafc;
    width: 48rem;
    border-radius: 0.8rem;
    margin: auto 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  h5 {
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
  }
  @media only screen and (max-width: 87rem) {
    padding: 6rem 8rem;
  }
  @media only screen and (max-width: 42rem) {
    padding: 4rem 2rem;
    height: 60rem;
    div {
      padding: 2.4rem;
      width: 88%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    h5 {
      font-size: 1.8rem;
    }
  }
`;

export const Benefits = () => {
  return (
    <StyledBenefits>
      <div>
        <h5>Real-time, Accurate and Credible Data for World Currencies</h5>
        <p>
          Auditors, accountants, hedge fund managers, treasurers, software developers and product managers use our API to track FX movements accurately and consistently. The ability to automate your exchange rate retrieval processes will put your auditors at ease and give your finance department accurate rates they can trust. The simple and flexible functionality of our API accurately tracks FX movements and eliminates manual errors. Supports JSON, XML and CSV formats.
        </p>
      </div>
    </StyledBenefits>
  )
}

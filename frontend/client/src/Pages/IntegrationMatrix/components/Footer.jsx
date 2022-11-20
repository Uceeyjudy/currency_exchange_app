import { FinalContainer, GridContainer, StyledFooter } from "./styled/Footer.styled";

import arrowDown from "../assets/arrowdown.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <GridContainer>
        <div>
          <p>
            Company
            <img src={arrowDown} alt="arrow-down" />
          </p>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Partnerships</li>
            <li>Meet the team</li>
            <li>Press</li>
            <li>Board of directors</li>
          </ul>
        </div>
        <div>
          <p>
            Links
            <img src={arrowDown} alt="arrow-down" />
          </p>
          <ul>
            <li>Convert</li>
            <li>News</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <p>
            Resources
            <img src={arrowDown} alt="arrow-down" />
          </p>
          <ul>
            <li>Currency Encyclopedia</li>
            <li>Historical currency exchange</li>
          </ul>
        </div>
        <div>
          <p>
            Product
            <img src={arrowDown} alt="arrow-down" />
          </p>
          <ul>
            <li>API</li>
            <li>Integration matrix</li>
          </ul>
        </div>
        <div>
          <p>
            Support
            <img src={arrowDown} alt="arrow-down" />
          </p>
          <ul>
            <li>Help centre</li>
            <li>FAQ</li>
            <li>File a complaint</li>
            <li>Fraud report</li>
          </ul>
        </div>
        <div>
          <p>
            Legal
            <img src={arrowDown} alt="arrow-down" />
          </p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </GridContainer>
      <FinalContainer>
        <p>Street Rate</p>
        <p> &#169; 2022 Bevel All rights reserved.</p>
      </FinalContainer>
    </StyledFooter>
  );
};

export default Footer;

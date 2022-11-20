import { LeftSection, MenuContainer, RightSection, StyledHeader } from "./styled/Header.styled";
import menu from "../assets/menu.svg";

import eng from "../assets/eng.svg";
import arrowdownblack from "../assets/arrowdownblack.svg";

const flagContainer = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const Header = () => {
  return (
    <StyledHeader>
      <LeftSection>StreetRates</LeftSection>
      <RightSection>
        <div style={flagContainer}>
          <img src={eng} alt="england-flag" />
          <img src={arrowdownblack} alt="arrow-down" />
        </div>
        <p>Home</p>
        <p>Convert</p>
        <p>News</p>
        <p>Contact</p>
      </RightSection>
      <MenuContainer>
        <img src={menu} alt="menu" />
      </MenuContainer>
    </StyledHeader>
  );
};

export default Header;

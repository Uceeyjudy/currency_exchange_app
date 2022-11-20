import {
  StyledHeaderUtils,
  StyledHeaderWrapper,
  StyledHeaderSearch,
} from "./headerLayout.styled";
import { ReactComponent as MailIcon } from "../../assets/icons/mail.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";
import TooltipIcon from "../shared/TooltipIcon/TooltipIcon";
import HeaderAvatar from "./avatar/HeaderAvatar";
import Person3 from "../../assets/images/person3.png";
import Search from "./search/HeaderSearch";

const userInfo = {
  name: "Mikey Doe",
  pfp_url: Person3,
  email: "mikey.doe@example.com",
};

function HeaderLayout() {
  return (
    <header>
      <StyledHeaderWrapper>
        <StyledHeaderSearch>
          <Search />
        </StyledHeaderSearch>

        <StyledHeaderUtils>
          <TooltipIcon svg={<MailIcon />} title="Mail" />
          <TooltipIcon svg={<BellIcon />} title="Notifications" />
          <HeaderAvatar userData={userInfo} />
        </StyledHeaderUtils>
      </StyledHeaderWrapper>
    </header>
  );
}

export default HeaderLayout;

import { NavLink } from "react-router-dom";
import { ReactComponent as DashboardIcon } from "../../../assets/icons/dashboard_icon.svg";
import { ReactComponent as CreateIcon } from "../../../assets/icons/create_icon.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/icons/settings_icon.svg";
import {
  StyledSidebarNavigation,
  StyledSidebarNavigationOption,
} from "./SidebarNavigation.styled";

const navigationOptions = [
  {
    item: "Dashboard",
    route: "/",
    icon: <DashboardIcon />,
    iconActive: <DashboardIcon />,
  },
  {
    item: "Create/Edit",
    route: "/create",
    icon: <CreateIcon />,
    iconActive: <CreateIcon />,
  },
  {
    item: "Settings",
    route: "/settings",
    icon: <SettingsIcon />,
    iconActive: <SettingsIcon />,
  },
];

function SidebarNavigation() {
  return (
    <StyledSidebarNavigation>
      <nav>
        {navigationOptions.map((option, index) => (
          <NavLink key={index} to={option.route}>
            {({ isActive }) => (
              <StyledSidebarNavigationOption $isActive={isActive}>
                <div className="icon">{option.icon}</div>
                <p className="option">{option.item}</p>
              </StyledSidebarNavigationOption>
            )}
          </NavLink>
        ))}
      </nav>
      {/* <StyledSidebarNavigationBottom>
                <div className="icon">
                    <LogoutIcon />
                </div>
                <p className="option">
                    Logout
                </p>
            </StyledSidebarNavigationBottom> */}
    </StyledSidebarNavigation>
  );
}

export default SidebarNavigation;

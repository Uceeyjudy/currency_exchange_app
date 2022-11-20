import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ReactComponent as InboxIcon } from "../../../assets/icons/menu_mail.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/menu_profile.svg";
import { ReactComponent as SettingIcon } from "../../../assets/icons/menu_setting.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/icons/logout.svg";
import {
  StyledAvatarMenuProfile,
  StyledAvatarMenuProfilePreview,
  StyledAvatarMenuWrapper,
  StyledAvatarMenuOption,
  StyledAvatarMenuOptions,
  StyledAvatarMenuLogout,
  StyledOprionsWrapper,
} from "./HeaderAvatar.styled";
import AvatarLoader from "../../shared/AvatarLoader/AvatarLoader";

function HeaderAvatar({ userData }) {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Profile and settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            src={userData.pfp_url}
            sx={{ width: "48px", height: "48px" }}
          >
            {!userData.name ? Array.from(userData.name)[0] : ""}
          </Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "45px", pt: "0px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <StyledAvatarMenuWrapper>
          <StyledAvatarMenuProfile>
            <AvatarLoader alt={userData.name} image={userData.pfp_url} />

            <StyledAvatarMenuProfilePreview>
              <h4>Mikey Doe</h4>
              <p>mikey.doe@example.com</p>
            </StyledAvatarMenuProfilePreview>
          </StyledAvatarMenuProfile>
        </StyledAvatarMenuWrapper>

        <StyledOprionsWrapper>
          <StyledAvatarMenuOptions>
            <MenuItem onClick={handleCloseUserMenu}>
              <StyledAvatarMenuOption>
                <div className="icon">
                  <InboxIcon />
                </div>
                <p className="option">Inbox</p>
              </StyledAvatarMenuOption>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <StyledAvatarMenuOption>
                <div className="icon">
                  <ProfileIcon />
                </div>
                <p className="option">My Profile</p>
              </StyledAvatarMenuOption>
            </MenuItem>
          </StyledAvatarMenuOptions>

          <MenuItem onClick={handleCloseUserMenu}>
            <StyledAvatarMenuOption>
              <div className="icon">
                <SettingIcon />
              </div>
              <p className="option">Settings</p>
            </StyledAvatarMenuOption>
          </MenuItem>

          <StyledAvatarMenuLogout onClick={handleCloseUserMenu}>
            <div className="icon">
              <LogoutIcon />
            </div>
            <p>Logout</p>
          </StyledAvatarMenuLogout>
        </StyledOprionsWrapper>
      </Menu>
    </Box>
  );
}

HeaderAvatar.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default HeaderAvatar;

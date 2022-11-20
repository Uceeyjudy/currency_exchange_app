import {
    Drawer,
    Typography,
    Divider,
    Box,
  } from "@mui/material";
  import React from "react";
  import {Link } from "react-router-dom";
  
  const DrawerComponent = ({ isOpen, setIsOpen, navItems }) => {
    const drawer = (
      <Box onClick={setIsOpen} sx={{ textAlign: "center" }}>
        <Typography
          variant="h6"
          sx={{
            my: 3,
            ml: 2,
            fontSize: "23px",
            lineHeight: "28px",
            fontWeight: "600",
          }}
          color="#00296B"
          letterSpacing="-0.04em"
          role="heading"
        >
          Street Rate
        </Typography>
        <Divider />
        <Box
        alignItems="center"
        display="flex"
        gap="20px"
        marginTop="20px"
        flexDirection="column"
        fontWeight="400"
        lineHeight="24px"
        color="#94A3B8"
        fontSize="14px"
      >
        <Link to="/" color="inherit">
          Home
        </Link>

        <Link to="/convert" color="inherit">
          Convert
        </Link>

        <Link to="#" color="inherit">
          Currency Profile
        </Link>

        <Link to="/news" color="inherit">
          News
        </Link>

        <Link to="/contact" color="inherit">
          Contact
        </Link>
      </Box>
      </Box>
    );
  
    const drawerWidth = 240;
    return (
      <>
        {isOpen && (
          <Drawer
            variant="temporary"
            anchor="right"
            open={isOpen}
            onClose={setIsOpen}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </>
    );
  };
  
  export default DrawerComponent;
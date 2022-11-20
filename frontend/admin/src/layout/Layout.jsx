import React from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "../component/HeaderComponent/HeaderLayout";
import SidebarLayout from "../component/SidebarComponent/SidebarLayout";
import { StyledLayout } from "./GridLayout.styled";

const Layout = () => {
  return (
    <StyledLayout>
      <SidebarLayout />

      <div id="content">
        <HeaderLayout />
        <Outlet />
      </div>
    </StyledLayout>
  );
};

export default Layout;

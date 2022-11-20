import SidebarNavigation from "./nav/SidebarNavigation";
import {
  StyledSidebarTopBlock,
  StyledSidebarTopHeader,
  StyledSidebarWrapper,
} from "./SidebarLayout.styled";

function SidebarLayout() {
  return (
    <StyledSidebarWrapper id="sidebar">
      <StyledSidebarTopBlock>
        <StyledSidebarTopHeader>
          <h2>Street Rate</h2>
        </StyledSidebarTopHeader>
      </StyledSidebarTopBlock>

      <SidebarNavigation />
    </StyledSidebarWrapper>
  );
}

export default SidebarLayout;

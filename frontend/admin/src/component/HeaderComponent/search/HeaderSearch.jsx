import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import {
  SearchWrapper,
  StyledSearchIconWrapper,
  StyledSearchInput,
} from "./HeaderSearch.styled";

export default function Search() {
  return (
    <>
      <SearchWrapper>
        <StyledSearchInput placeholder="Search" />

        <StyledSearchIconWrapper>
          <SearchIcon />
        </StyledSearchIconWrapper>
      </SearchWrapper>
    </>
  );
}

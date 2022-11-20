import * as React from "react";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  
  font-size:16px
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  display: flex;
  padding: 12px;
  justify-content: space-between;
  border-radius: 5px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }

  span{
    display:flex;
    align-items:center;

    img{
      margin-right: 10px;
    }
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 320px;
  border-radius: 5px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 5px;
  cursor: default;
  
  

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  span{
    display:flex;
    align-items:center;

    img{
      margin-right: 10px;
    }
  }

  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const Image = styled("img")`
  width: 40px;
  height: 24px;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <SelectUnstyled {...props} ref={ref} slots={slots} />;
});

export default function UnstyledSelectSimple() {
  return (
    <CustomSelect defaultValue="NG">
      <StyledOption value="US">
        <span>
          <Image src="https://flagcdn.com/ae.svg" alt="NG" />
          <p>AED - UAE Dirham </p>
        </span>
      </StyledOption>
      <StyledOption value="NG">
        <span>
          <Image src="https://flagcdn.com/ng.svg" alt="NG" />
          <p>NGN - Nigerian Naira </p>
        </span>
      </StyledOption>
      <StyledOption value="ILS">
        <span>
          <Image src="https://flagcdn.com/il.svg" alt="ILS" />
          <p>ILS - Israel New Shekel </p>
        </span>
      </StyledOption>
      <StyledOption value="JPY">
        <span>
          <Image src="https://flagcdn.com/jp.svg" alt="JPY" />
          <p>JPY - Japanese Yen </p>
        </span>
      </StyledOption>
      <StyledOption value="KRW">
        <span>
          <Image src="https://flagcdn.com/kr.svg" alt="KRW" />
          <p>KRW - South Korean Won </p>
        </span>
      </StyledOption>
      <StyledOption value="INR">
        <span>
          <Image src="https://flagcdn.com/in.svg" alt="INR" />
          <p>INR - Indian Rupees </p>
        </span>
      </StyledOption>
      <StyledOption value="GHC">
        <span>
          <Image src="https://flagcdn.com/gh.svg" alt="GHC" />
          <p>GHC - Ghana Cedis </p>
        </span>
      </StyledOption>
    </CustomSelect>
  );
}

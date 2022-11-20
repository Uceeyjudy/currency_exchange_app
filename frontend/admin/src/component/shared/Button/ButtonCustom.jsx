import PropTypes from "prop-types";
import Button from "@mui/material/Button";

const ButtonCustom = ({ children, disabled, icon }) => {
  return (
    <Button
      endIcon={icon}
      disabled={disabled}
      disableElevation
      color="primary"
      variant="contained"
      sx={[
        (theme) => ({
          textAlign: "center",
          letterSpacing: "-0.02em",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "20px",
          padding: "6px 12px",
          whiteSpace: "nowrap",
          borderRadius: theme.$styled.borderRadius.sm,
        }),
        // {
        //   "&:hover": {
        //     color: "#000",
        //   },
        // },
        (theme) => ({
          "&.Mui-disabled": {
            color: theme.$styled.colors.text400,
            backgroundColor: theme.$styled.colors.text200,
          },
        }),
      ]}
    >
      {children}
    </Button>
  );
};

ButtonCustom.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
};

export default ButtonCustom;

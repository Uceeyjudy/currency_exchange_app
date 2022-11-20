import PropTypes from "prop-types";
import { StyledCardHeader } from "./CardHeader.styled";

function CardHeader({ icon, title }) {
  return (
    <StyledCardHeader>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
    </StyledCardHeader>
  );
}

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

export default CardHeader;

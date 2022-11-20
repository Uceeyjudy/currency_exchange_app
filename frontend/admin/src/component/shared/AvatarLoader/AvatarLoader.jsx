import PropTypes from "prop-types";
import StyledAvatar from "./AvatarLoader.styled";

function AvatarLoader({ image, alt }) {
  return (
    <StyledAvatar src={image ? image : ""} alt={alt}>
      {!image ? Array.from(alt)[0] : ""}
    </StyledAvatar>
  );
}

AvatarLoader.propTypes = {
  alt: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default AvatarLoader;

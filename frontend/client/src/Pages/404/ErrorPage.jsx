import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import smallImage from "./errorsmall.svg";
function ErrorPage() {
  const Text = ({ text }) => (
    <Typography fontWeight="600" align="center">
      {text}
    </Typography>
  );
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" component="h1" fontWeight="600" align="center">
        <span style={{ color: "#EF4444" }}> Oops!</span> Something went wrong.
      </Typography>
      <Text text="We found the rate not the page" />
      <Image src={smallImage} alt="Sorry page not available" />
      <Text text="It may have been removed or you misspelled the URL" />
      <Text text="" />
      <Typography fontWeight="600" align="center">
        You can go back to{" "}
        <Link to={"/"} style={{ color: "#3381FF" }}>
          streetrate.com
        </Link>{" "}
        or kindly{" "}
        <Link to={"/"} style={{ color: "#3381FF" }}>
          {" "}
          contact us
        </Link>{" "}
        about the problem
      </Typography>
    </Container>
  );
}

const Image = styled.img`
  width: 100%;
  max-width: 700px;
`;
export default ErrorPage;

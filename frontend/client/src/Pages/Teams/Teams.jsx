import { createGlobalStyle } from "styled-components";
import Container1 from "./componets/container1/Container1";
import Container2 from "./componets/container2/Container2";
import Container3 from "./componets/container3/Container3";

function TeamPage() {

  const GlobalStyle = createGlobalStyle`
  *{
      box-sizing: border-box;
      margin: 0;
      font-family: 'Inter', sans-serif;
  } 
  `
  return (
    <>
      <GlobalStyle />
      <Container1 />
      <Container2 />
      <Container3 />
    </>
  );
}

export default TeamPage;
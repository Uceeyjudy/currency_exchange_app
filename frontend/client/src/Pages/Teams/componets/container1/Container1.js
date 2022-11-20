import React from "react";
import { Container, TeamImg } from "./styles/Container.style";
import { LandingInfo } from "./styles/LandingInfo.style";
import teamImg from "../../assets/LeadTeam_img/team.jpg";

const Container1 = () => {
  return (
    <>
      <Container>
        <LandingInfo>
          <h2> COMPANY • TEAM </h2>
          <h1> Meet the brilliant team at StreetRates </h1>
          <h3>
            Our team brings together a plethora of skills, backgrounds,
            interests, and education which enables us to conquer the challenges
            we face to create best-in-class user experiences
          </h3>
        </LandingInfo>
        <TeamImg src={teamImg} />
      </Container>
    </>
  );
};

export default Container1;

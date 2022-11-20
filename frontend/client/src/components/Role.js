import React from "react";
import styled from "styled-components";
import active from "../Pages/Careers/assets/Active.svg";
import Button from "./CareerButton";

function Role({ title, content, tag1, tag2, tag3 }) {
  return (
    <RoleWrapper>
      <RoleText>
        <h6>{title}</h6>
        <p>{content}</p>
        <Tags>
          <p className="p">{tag1}</p>
          <img src={active} alt="" />
          <p className="p">{tag2}</p>
          <img src={active} alt="" />
          <p className="p">{tag3}</p>
        </Tags>
      </RoleText>
      <a href="https://boards.greenhouse.io/contentful/jobs/3902555?gh_jid=3902555#app">
        <Button cta={true}>Apply Now</Button>
      </a>
    </RoleWrapper>
  );
}

export default Role;

const RoleWrapper = styled.div`
  display: flex;
  /* gap: clamp(100px, 20vw, 160px); */
  justify-content: space-between;
  border-radius: 12px;
  padding: 42px 56px;
  border: 1px solid #b0ceff;
  align-items: center;
  & button {
    /* flex: 0; */
    border-radius: 5px;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    padding: 24px;
    /* width: min-content; */
    /* padding: 8px; */
  }
`;

const RoleText = styled.div`
  width: 55%;
  & h6 {
    margin-bottom: 16px;
  }
  & p {
    font-size: clamp(14px, 5vw, 16px);
    margin-bottom: 16px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  & img {
    width: 6px;
  }
  .p {
    margin-bottom: 0px;
    font-size: clamp(12px, 10vw, 16px);
  }
`;

import React from "react";
import styled from "styled-components";
import Button from "../../components/CareerButton";

import squiggly from "./assets/squiggly.svg";
import Hi from "./assets/heroImg.svg";
import smiley from "./assets/smiley.svg";
import globe from "./assets/globe.png";
import heart from "./assets/heart.png";
import star from "./assets/star.png";

import values from "./assets/values.svg";
import group4 from "./assets/Group 4.png";
import circle from "./assets/circle.svg";
import { useState } from "react";
import Paginator from "../../components/Paginator";
import Benefit from "../../components/Benefit";
import favourite from "./assets/favourite.svg";
import money from "./assets/money.svg";
import home from "./assets/home.svg";
import hearing from "./assets/hearing.svg";
import internet from "./assets/internet.svg";
import spa from "./assets/spa.svg";
import parental from "./assets/parental.svg";
import laptop from "./assets/laptop.svg";
import stipend from "./assets/stipend.svg";
import payment from "./assets/payment.svg";
import productivity from "./assets/productivity.svg";
import team from "./assets/team.svg";
import workingSpace from "./assets/workingSpace.svg";
import Entertainment from "./assets/Entertainment.svg";

import steps from "./assets/steps.svg";
import Line from "./assets/Line (2).svg";
import Role from "../../components/Role";
import misc06 from "./assets/Misc_06.svg";
import { HashLink } from "react-router-hash-link";
import { ArrowBack } from "@mui/icons-material";
import Carousel from "../../components/Carousel";
import IntroCard from "../../components/IntroCard";
import GlobalStyle from "./Boilerplate.style";
const coreValues = [
  {
    number: "01/05",
    zIndex: "50",
    title: "Communication and Teamwork",
    desc: "We are direct and concise. We efficiently share information, increasing collaboration and productivity. We engage in active listening.",
  },
  {
    number: "02/05",
    zIndex: "40",
    title: "Customer Focus",
    desc: `We are laser-focused in providing solutions. With every decision, we ask ourselves, ${"How does this create more value for our customers?"}`,
  },
  {
    number: "03/05",
    zIndex: "30",
    title: "Life-long learning",
    desc: "Strive to get a little better at something, every day. We embrace candid feebacks, we see every siuation as a learning opportunity. ",
  },
  {
    number: "04/05",
    zIndex: "20",
    title: "Transparency",
    desc: "Share your work frequently. Seek feedback openly. As soon as possible, have the difficult, honest conversation. Get it out of your system.",
  },
  {
    number: "05/05",
    zIndex: "10",
    title: "Practice kindness",
    desc: "Bring positive energy. Respect and empathy should be used to lift others up. Create moments of play at work.",
  },
];

function Careers() {
  const [index, setIndex] = useState(0);

  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(coreValues.length - 1);
    }
  };

  const slideRight = () => {
    if (index + 1 <= coreValues.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const handlePageChange = (page) => {
    let n = page - index;
    setIndex(index + n);
  };
  return (
    <AppBody>
      <GlobalStyle />
      <HeroSection>
        <HeroContent>
          <HeroText>
            <h6>CAREERS</h6>
            <h1>
              Join our{" "}
              <span>
                awesome <img src={squiggly} alt="" />{" "}
              </span>{" "}
              team
            </h1>
            <h6>
              Join a group of talented and fun individuals working together to
              create a new economic model. Come join us!
            </h6>
            <HashLink smooth to={"/careers/#Roles"}>
              <Button>See open roles</Button>
            </HashLink>
          </HeroText>
          <HeroImg>
            <img src={Hi} alt="" />
          </HeroImg>
        </HeroContent>
      </HeroSection>
      <IntroSection>
        <WhoWeAre>
          <h3>
            Who we{" "}
            <span>
              are <img src={smiley} alt="" />
            </span>
          </h3>
          <p className="desc">
            We are problem solvers who are deeply focused on building the future
            of finance for users across the globe. We strongly believe that
            teamwork and a constant desire to improve helps us achieve that.
          </p>
          <IntroRow>
            <IntroCard
              img={globe}
              title={"Building world-class solutions"}
              content={
                "We take pride in developing high-quality products that have a long-term impact on our global user community."
              }
            />
            <IntroCard
              img={heart}
              title={"Encouraging innvovation  "}
              content={
                "We prioritize healthy teamwork dynamics, providing an environment, support, and trust for everyone on the team to get things done."
              }
            />
            <IntroCard
              img={star}
              title={"Increasing economic freedom"}
              content={
                "Everyone has the right to financial services that will enable them to make a better life for both them and their communities."
              }
            />
          </IntroRow>
        </WhoWeAre>
      </IntroSection>
      <CarouselSection>
        <h3>
          {" "}
          Our core{" "}
          <span>
            values <img src={values} alt="" />
          </span>
        </h3>
        <CarouselContent>
          {coreValues.map((value, n) => {
            let position =
              n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
            return <Carousel {...value} cardStyle={position} />;
          })}

          <ArrowBack className="left" onClick={slideLeft} />
          <ArrowBack className="right" onClick={slideRight} />
        </CarouselContent>
        <Paginator
          activeIndex={index}
          dataLength={coreValues.length}
          handlePageChange={handlePageChange}
        />
      </CarouselSection>

      <WhyWorkHereWrapper>
        <WhyWorkHere>
          <h3>Why work here</h3>
          <p>
            We value the human passion to know, grow, and make a positive
            contribution to the world.
          </p>
          <WhyWorkHereContent>
            <WhyWorkHereImg>
              <img src={group4} alt="" />
            </WhyWorkHereImg>
            <TextWrapper>
              <WhyWorkHereText>
                <h6>Be a part of a talented team</h6>
                <p>
                  StreetRates is not your typical workplace. Above all, working
                  here will make you feel like you're part of a team of
                  hand-picked, talented individuals collaborating to achieve the
                  team's goals.
                </p>
              </WhyWorkHereText>
              <WhyWorkHereText>
                <h6>Make a difference</h6>
                <p>
                  You will be pushed, learn, and have the satisfaction of
                  knowing that your work has a direct impact on the daily lives
                  of thousands of professionals all over the world.
                </p>
              </WhyWorkHereText>
            </TextWrapper>
          </WhyWorkHereContent>
        </WhyWorkHere>
      </WhyWorkHereWrapper>

      <PerksWrapper>
        <PerksContent>
          <h6>PERKS & BENEFITS</h6>
          <h3>
            What's in it for{" "}
            <span>
              you <img src={circle} alt="" />
            </span>
          </h3>
          <p className="PerksDesc">
            A job is more than just the people you work with and the tasks you
            complete. It's also the little things that make you look forward to
            going to work every day!
          </p>

          <Benefits>
            <Benefit img={favourite} content={"Work life balance"} />
            <Benefit img={money} content={"Competitive salary and equity"} />
            <Benefit
              img={home}
              content={"Work remotely, no commuting to the office"}
            />
            <Benefit
              img={hearing}
              content={"Health, dental and vision insurance"}
            />
            <Benefit img={spa} content={"5 weeks paid vacation"} />
            <Benefit img={parental} content={"Parental leave"} />
            <Benefit img={internet} content={"Internet reinbursement"} />
            <Benefit img={laptop} content={"New Macbook pro"} />
            <Benefit
              img={productivity}
              content={"Latest productivity software"}
            />
            <Benefit img={stipend} content={"Stipend to set up home office"} />
            <Benefit img={payment} content={"401(k) plan"} />
            <Benefit img={team} content={"Regular team events"} />
            <Benefit img={workingSpace} content={"Paid co-working space"} />
            <Benefit img={Entertainment} content={"Entertainment allowance"} />
          </Benefits>
        </PerksContent>
      </PerksWrapper>

      <RecruitmentWrapper>
        <RecruitmentContent>
          <h3>Recruitment process</h3>
          <p className="RecruitDesc">
            Our simple 5-step recruitment process will familiarize you with the
            people you will be working closely with and give you a clear picture
            of what your potential future job will look like!
          </p>
          <Steps>
            <img src={Line} alt="steps" />
            <img src={steps} alt="" />
          </Steps>
        </RecruitmentContent>
      </RecruitmentWrapper>

      <OpenRolesWrapper id="Roles">
        <OpenRolesContent>
          <h3>
            Open{" "}
            <span>
              {" "}
              roles <img src={misc06} alt="" />
            </span>
          </h3>
          <p>Come join the crew!</p>
          <OpenRoles>
            <Role
              title={"Head of Finance"}
              content={
                "We're looking for a goal-oriented and inspiring leader who will oversee the finance units at Paystack, implement necessary processes to minimize risk, and ensure statutory compliance across all our current and future markets."
              }
              tag1={"Business"}
              tag2={"Full-time"}
              tag3={"Remote"}
            />
            <Role
              title={"Sales Manager"}
              content={
                "We're looking for someone who will handle the full sales cycle for businesses of all sizes in Ghana, building relationships with prospective clients and turning them into happy Paystack users."
              }
              tag1={"Business"}
              tag2={"Full-time"}
              tag3={"Ghana"}
            />
            <Role
              title={"User operations specialist"}
              content={
                "We're looking for smart, empathetic problem solvers to support Paystack merchants and merchants' customers in South Africa."
              }
              tag1={"Growth"}
              tag2={"Full-time"}
              tag3={"South Africa"}
            />
          </OpenRoles>
        </OpenRolesContent>
      </OpenRolesWrapper>
    </AppBody>
  );
}

export default Careers;

const AppBody = styled.section`
  /* padding-inline: 120px; */
`;
const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* align-items: center; */
  min-height: 40vh;
`;

const HeroSection = styled(Section)``;

const HeroContent = styled.div`
  display: flex;
  gap: 70px;

  /* justify-content: center; */
  padding-top: 150px;
  align-items: flex-start;
  width: min(86%, 1200px);
  /* min-height: 100vh; */

  @media screen and (max-width: 1195px) {
    padding-top: 100px;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    padding-top: 100px;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
  }
`;

const HeroText = styled.div`
  width: 70%;

  & h6:nth-of-type(1) {
    margin-bottom: clamp(16px, 5vw, 48px);
  }
  & h1 {
    margin-bottom: 18px;
    width: 100%;
  }
  & h6:nth-of-type(2) {
    margin-bottom: 28px;
    color: var(--gray-700);
    font-size: 20px;
    line-height: 28px;
  }

  & span {
    position: relative;
    display: flex;
    height: min-content;
    display: inline-block;

    /* height: fit-content; */
  }
  & span img {
    position: absolute;
    display: inline;
    bottom: -18px;
    left: 0px;
    margin: 0px;
    width: 100%;
    @media screen and (max-width: 900px) {
      bottom: -10px;
      left: 5px;
    }
    @media screen and (max-width: 600px) {
      bottom: -5px;
    }

    /* height: 100%; */
  }

  @media screen and (max-width: 1195px) {
    display: flex;

    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    /* padding-top: 162px; */
    flex-direction: column;

    align-items: flex-start;
  }
`;

const HeroImg = styled.div`
  position: relative;
  top: -90px;
  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1195px) {
    position: static;
  }
`;

const IntroSection = styled(Section)`
  background-color: var(--gray-50);
`;
const WhoWeAre = styled.div`
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  width: min(100%, 1200px);
  padding-top: 83px;

  align-items: center;

  width: min(86%, 1200px);

  & h3 {
    margin-bottom: 29px;
  }
  & span {
    display: inline-block;
  }
  & span img {
    /* height: clamp(32px, 5vw, 57px); */
    /* width: 100%; */
    /* display: none; */
  }
  .desc {
    text-align: center;
    margin-bottom: 125px;
  }
  @media screen and (max-width: 1195px) {
    //
  }
  @media screen and (max-width: 600px) {
    & span img {
      height: 22px;
    }
  }
`;

const IntroRow = styled.div`
  display: flex;
  gap: 68px;

  @media screen and (max-width: 1195px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    /* padding-top: 162px; */
    flex-direction: column;

    align-items: flex-start;
  }
`;

const CarouselSection = styled(Section)`
  /* background-color: blue; */
  position: relative;
  padding-top: 210px;
  /* gap: px; */
  /* align-items: flex-start; */

  /* display: block; */
  & h3 {
    margin-bottom: 60px;
  }
`;

const CarouselContent = styled.div`
  width: min(86%, 1200px);
  position: relative;
  /* background-color: red; */
  padding: 100px;
  display: flex;
  align-items: center;
  align-self: center;
  margin-top: 100px;

  .left {
    position: absolute;
    z-index: 90;
    /* display: none; */
    left: 10px;
    cursor: pointer;
    padding: 12px;
    font-size: 48px;
    background-color: #e6efff;
    border-radius: 100px;
    color: #3381ff;
    &:hover {
      background: #5496ff;
      color: white;
    }
    &:focus {
      background: #0046b5;
    }
    /* bottom: 0px; */
  }
  /* bottom: -100px; */

  .right {
    position: absolute;
    z-index: 90;
    right: 10px;
    transform: rotate(180deg);

    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    cursor: pointer;
    padding: 12px;
    font-size: 48px;
    background-color: #e6efff;
    border-radius: 100px;
    color: #3381ff;
    &:hover {
      background: #5496ff;
      color: white;
    }
    &:focus {
      background: #0046b5;
    }
  }
  /* gap: 8px; */
  @media screen and (max-width: 600px) {
    & svg:first-of-type {
      /* display: none; */
      /* left: 20px; */
      bottom: -140px;
    }
    /* bottom: -100px; */
    & svg:last-child {
      /* right: 20px; */
      bottom: -140px;
    }
  }
`;
const WhyWorkHereWrapper = styled(Section)`
  display: flex;
  flex-direction: column;
`;
const WhyWorkHere = styled.div`
  padding-top: 300px;
  width: min(86%, 1200px);
  & h3 {
    margin-bottom: 16px;
  }
  & p {
    margin-bottom: 24px;
    text-align: center;
  }
  /* align-items: center; */
  /* justify-content: flex-start; */
  /* gap: 120px; */

  /* @media screen and (max-width: 950px) {
    padding-top: 160px;
  }
  @media screen and (max-width: 600px) {
    padding-top: 210px;
  } */
`;
const WhyWorkHereContent = styled.div`
  display: flex;
  gap: 120px;
  align-items: center;

  @media screen and (max-width: 1195px) {
    flex-direction: column;
    align-items: center;
  }
`;

const WhyWorkHereText = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: left;
  gap: 8px;

  @media screen and (max-width: 1195px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
  gap: 70px;
  & h3 {
    text-align: left;
  }
  & p {
    text-align: left;
  }
  @media screen and (max-width: 1195px) {
    text-align: center;
    width: 100%;
    & h3,
    & p {
      text-align: center;
    }
  }
`;
const WhyWorkHereImg = styled.div`
  width: 60%;
  & img {
    width: 100%;
  }
  @media screen and (max-width: 1195px) {
    width: 100%;
  }
`;

const PerksWrapper = styled(Section)`
  margin-top: 210px;
`;

const PerksContent = styled.div`
  width: min(86%, 1200px);
  & h3 {
    margin-bottom: 20px;
  }
  & h6 {
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
  }
  & span {
    position: relative;
  }
  & span img {
    position: absolute;
    left: -10px;
    top: -10px;
    /* bottom: 20px; */
    /* right: 20px; */
  }
  .PerksDesc {
    text-align: center;
    margin-bottom: 73px;
  }
`;

const Benefits = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #b0ceff;
  grid-row-gap: 44px;
  grid-column-gap: 179px;
  padding: 32px;
  border-radius: 12px;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const RecruitmentWrapper = styled(Section)`
  /* background-color: red; */
`;

const RecruitmentContent = styled.div`
  padding-top: 125px;
  width: min(86%, 1200px);
  & h3 {
    margin-bottom: 17px;
  }
  .RecruitDesc {
    font-size: clamp(16px, 5vw, 20px);
    text-align: center;
    margin-bottom: 96px;
  }
  & img {
    transition: 1s ease-in-out;
  }
  & img:last-child {
    display: none;
  }
  @media screen and (max-width: 900px) {
    & img {
      transition: 1s ease-in-out;
    }
    & img:last-child {
      display: block;
      width: 35%;
    }
    & img:first-child {
      display: none;
    }
  }
`;

const Steps = styled.div`
  width: 100%;
  & img {
    width: 100%;
  }
`;

const OpenRoles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const OpenRolesWrapper = styled(Section)``;
const OpenRolesContent = styled.div`
  padding-top: 150px;
  padding-bottom: 50px;
  width: min(86%, 1200px);
  & h3 {
    margin-bottom: 12px;
    text-align: left;
  }
  & p {
    margin-bottom: 38px;
  }
`;

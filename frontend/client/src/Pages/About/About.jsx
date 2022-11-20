import React from "react";
import styled from "styled-components";
import mobileImage from "./assets/mobile-image.png";
import missionImage from "./assets/mission-image.png";
import visionImage from "./assets/vision-image.png";
import Value from "./components/Value";
import {
  AppstoreIcon,
  CommunityIcon,
  DiversityIcon,
  EntrepreneurshipIcon,
  GoogleplayIcon,
  InnovationIcon,
} from "./assets/icons/icons";
import TeamMember from "./components/TeamMember";
import teamate1 from "./assets/person1.png";
import teamate2 from "./assets/person2.png";
import teamate3 from "./assets/person3.png";
import teamate4 from "./assets/person4.png";
import teamate5 from "./assets/person5.png";
import teamate6 from "./assets/person6.png";
import teamate7 from "./assets/person7.png";
import teamate8 from "./assets/person8.png";
import scan from "./assets/scan-image.png";
const About = () => {
  const teamMember = [
    {
      name: "Person name",
      image: teamate1,
      designation: "designation",
    },
    {
      name: "Person name",
      image: teamate2,
      designation: "designation",
    },
    {
      name: "Person name",
      image: teamate3,
      designation: "designation",
    },
    {
      name: "Person name",
      image: teamate4,
      designation: "designation",
    },
    {
      name: "Person name",
      image: teamate5,
      designation: "designation",
    },
    {
      name: "Person name",
      image: teamate6,
      designation: "designation",
    },
    {
      name: "Person name",
      image: teamate7,
      designation: "designation",
    },
    {
      name: "Person name",
      image: teamate8,
      designation: "designation",
    },
  ];

  return (
    <>
      <StyledPage>
        <Container about>
          <AboutSection>
            <AboutContent>
              <AboutHead>About Us</AboutHead>
              <AboutText>
                Bankstreet is a platform that allows User to recieve/veiw
                instant conversion rates using customized areas real-time charts
                that fit the Ecomony value and a historical conversion record
                from one to one year and to enhance the customer experience{" "}
              </AboutText>
            </AboutContent>
            <AboutImage>
              <Img src={mobileImage} alt="mobileimage" />
            </AboutImage>
          </AboutSection>
        </Container>

        <Container>
          <MissionVisionSection>
            <MissionSection>
              <MissionImage src={missionImage} alt="mission" />
              <MissionContent>
                <MissionHead>Our Mission</MissionHead>
                <MissionText>
                  To create a onestop platform that allow user to view their
                  current and standard economic money rate in other currencies
                </MissionText>
              </MissionContent>
            </MissionSection>
            <MissionSection vision>
              <MissionImage vision src={visionImage} alt="mission" />
              <MissionContent>
                <MissionHead>Our Vision</MissionHead>
                <MissionText>
                  To prepare the users mindset for any expenditure in any
                  country of thier chioce
                </MissionText>
              </MissionContent>
            </MissionSection>
          </MissionVisionSection>
        </Container>

        <Container values>
          <ValueSection>
            <StyledContent>
              <StyledHead>Our Values</StyledHead>
              <StyledText>
                Offering a unique experience and providing an accurate of any
                country exchange rate of your choice
              </StyledText>
            </StyledContent>
            <ValuesList>
              <Value
                icon={<EntrepreneurshipIcon />}
                text="Ability to identify problems, and collaboratively solve them to create opportunities for everyone."
                heading="Entrepreneurship"
              />
              <Value
                icon={<DiversityIcon />}
                text="At StreetRate we embrace our interdependence as humans, our rich cultures, and places we come from."
                heading="Diversity"
              />
              <Value
                icon={<InnovationIcon />}
                text="We partner people with technology to create an impact-first work environment."
                heading="Innovation"
              />
              <Value
                icon={<CommunityIcon />}
                text="Our approach is simple. Great people and a vibrant community, make a good company."
                heading="Community"
              />
            </ValuesList>
          </ValueSection>
        </Container>
        <Container>
          <TeamSection>
            <StyledContent>
              <StyledHead>Meet the Brilliant Team</StyledHead>
              <StyledText>
                Meet our team of digital warriors ready to harness the force for
                good
              </StyledText>
            </StyledContent>
            <TeamMembers>
              {teamMember.map((member) => {
                return (
                  <TeamMember
                    image={member.image}
                    name={member.name}
                    designation={member.designation}
                  />
                );
              })}
            </TeamMembers>
          </TeamSection>
        </Container>
        <Container>
          <DownloadSection>
            <MImg src={mobileImage} />
            <DownloadView>
              <DownloadContent>
                <DownloadHeader>Download Streetrates App</DownloadHeader>
                <DownloadText>
                  Check live rates, send money securely, set rate alerts,
                  receive notifications and more.
                </DownloadText>
                <Scan>
                  <ScanImg src={scan} />
                </Scan>
                <DownloadIcons>
                  <AppleDownload>
                    <AppstoreIcon />
                  </AppleDownload>
                  <GoogleDownload>
                    <GoogleplayIcon />
                  </GoogleDownload>
                </DownloadIcons>
              </DownloadContent>
            </DownloadView>
          </DownloadSection>
        </Container>
      </StyledPage>
    </>
  );
};

export default About;

const sizes = {
  mobile: "480px",
  tablet: "768px",
  laptopS: "1024px",
  laptop: "1200px",
};

const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptopS: `(max-width: ${sizes.laptop})`,
  laptop: `(max-width: ${sizes.laptop})`,
};
const StyledPage = styled.div``;

const Container = styled.div`
  background-color: ${(props) => {
    if (props.about) {
      return `
        #00296b;
        color: #fff;
    `;
    } else if (props.noBg) {
      return `
        background: #fff;
        color: #202020;
    `;
    } else if (props.values) {
      return `
        #f8fafc;
        color: #202020;
    `;
    }
  }};

  display: flex;
  justify-content: center;
`;
const AboutSection = styled.div`
  /* background-color: #00296b; */
  display: flex;
  color: #fff;
  padding: 4rem 177px;
  width: 1600px;
  @media ${devices.laptop} {
    flex-direction: row;
    padding: 42px 65px;
    align-items: center;
  }
  @media ${devices.laptopS} {
    flex-direction: column;
    padding: 42px 65px;
    align-items: center;
  }
  @media ${devices.tablet} {
    flex-direction: column;
    padding: 42px 24px;
    align-items: center;
  }
  @media ${devices.mobile} {
    flex-direction: column;
    padding: 42px 24px;
    align-items: center;
  }
`;

const AboutContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 5rem;
  font-family: var(--font-family);
  /* max-width: 490px; */

  @media ${devices.laptopS} {
    margin: 0;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }
  @media ${devices.tablet} {
    margin: 0;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }
  @media ${devices.mobile} {
    margin: 0;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }
`;

const AboutImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const AboutHead = styled.h1`
  margin: 50px 0;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
`;
const AboutText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  max-width: 600px;

  @media ${devices.laptop} {
    font-size: 16px;
  }
  @media ${devices.tablet} {
    padding: 0 60px;
  }
  @media ${devices.mobile} {
    padding: 0;
  }
`;

const Img = styled.img`
  width: 422px;
  @media ${devices.tablet} {
    width: 300px;
  }
  @media ${devices.mobile} {
    width: 224px;
  }
`;

const MissionVisionSection = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  color: #202020;
  font-family: var(--font-family);
  padding: 100px 177px;
  width: 1600px;
  @media ${devices.laptop} {
    flex-direction: column;
    padding: 42px 24px;
    align-items: center;
  }
  @media ${devices.tablet} {
    flex-direction: column;
    padding: 42px 24px;
    align-items: center;
  }
  @media ${devices.mobile} {
    /* flex-direction: column; */
    padding: 42px 24px;
    /* align-items: center; */
  }
`;

const MissionSection = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.vision ? "row-reverse" : "row")};
  align-items: center;
  @media ${devices.laptop} {
    flex-direction: column;
  }
`;
const MissionContent = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${devices.laptop} {
    max-width: 530px;
    margin: 50px 0 38px 0;
  }
`;
const MissionImage = styled.img`
  margin: ${(props) => (props.vision ? "0 0 50px 4rem" : "0 2rem 50px 0")};

  @media ${devices.laptop} {
    margin: 0;
  }
  @media ${devices.tablet} {
    width: 300px;
  }
  @media ${devices.mobile} {
    width: 250px;
  }
`;
const MissionHead = styled.h2`
  font-size: 32px;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 10px;
`;
const MissionText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;

const ValueSection = styled.div`
  display: flex;
  flex-direction: column;
  color: #202020;
  font-family: var(--font-family);
  padding: 100px 177px;
  width: 1660px;

  @media ${devices.laptopS} {
    flex-direction: column;
    padding: 42px 65px;
    align-items: center;
  }
  @media ${devices.tablet} {
    flex-direction: column;
    padding: 42px 44px;
    align-items: center;
  }
  @media ${devices.mobile} {
    /* flex-direction: column; */
    padding: 42px 44px;
    /* align-items: center; */
  }
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 44px;
`;
const StyledHead = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 28px;
`;
const StyledText = styled.p``;

const ValuesList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  @media ${devices.laptop} {
    justify-content: center;
    width: 100%;
    gap: 15px;
    max-width: 850px;
  }
  @media ${devices.tablet} {
    flex-direction: column;
    width: auto;
  }
`;

const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  color: #202020;
  font-family: var(--font-family);
  padding: 100px 177px;
  width: 1600px;
  @media ${devices.laptop} {
    flex-direction: column;
    padding: 42px 224px;
    align-items: center;
    width: 730px;
  }
  @media ${devices.laptopS} {
    flex-direction: column;
    padding: 42px 44px;
    align-items: center;
    width: auto;
  }
  @media ${devices.tablet} {
    flex-direction: column;
    padding: 42px 94px;
    align-items: center;
    width: auto;
  }
  @media ${devices.mobile} {
    /* flex-direction: column; */
    padding: 42px 44px;
    /* align-items: center; */
    width: auto;
  }
`;

const TeamMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 44px;
  justify-content: center;
`;

const DownloadSection = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */
  color: #202020;
  font-family: var(--font-family);
  padding-bottom: 40px;
  @media ${devices.laptop} {
    flex-direction: column;
    padding: 42px 24px;
    align-items: center;
    /* width: 730px; */
  }
  @media ${devices.laptopS} {
    flex-direction: column;
    padding: 42px 44px;
    align-items: center;
  }
  @media ${devices.mobile} {
    /* flex-direction: column; */
    padding: 42px 44px;
    /* align-items: center; */
  }
`;
const DownloadView = styled.div``;
const DownloadContent = styled.div`
  margin: 0 0 0 158px;
  @media ${devices.laptop} {
    margin: 0;
  }
  @media ${devices.tablet} {
    text-align: center;
  }
`;
const DownloadHeader = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
`;
const DownloadText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  margin-top: 24px;
  margin-bottom: 34px;
`;
const Scan = styled.div`
  margin-bottom: 24px;
`;
const ScanImg = styled.img`
  width: 422px;
  @media ${devices.tablet} {
    width: auto;
  }
  @media ${devices.mobile} {
    width: auto;
  }
`;

const GoogleDownload = styled.a``;

const AppleDownload = styled.a``;
const DownloadIcons = styled.div`
  display: flex;
  gap: 10px;
  @media ${devices.tablet} {
    align-items: center;
    justify-content: center;
  }
  @media ${devices.mobile} {
    align-items: center;
    justify-content: center;
  }
`;

const MImg = styled.img`
  @media ${devices.laptopS} {
    display: none;
  }
  @media ${devices.tablet} {
    display: none;
  }
  @media ${devices.mobile} {
    display: none;
  }
`;

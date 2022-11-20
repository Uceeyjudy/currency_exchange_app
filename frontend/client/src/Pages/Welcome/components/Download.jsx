import React from "react";
import styled from "styled-components";
import mobileImage from "../assets/mobile-image.png";
import scan from "../assets/scan-image.png";
import { AppstoreIcon, GoogleplayIcon } from "../assets/icons/icons";
const Download = () => {
  return (
    <Container>
      <DownloadSection>
        <MImg src={mobileImage} />
        <DownloadView>
          <DownloadContent>
            <DownloadHeader>Download Streetrates App</DownloadHeader>
            <DownloadText>
              Check live rates, send money securely, set rate alerts, receive
              notifications and more.
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
  );
};

export default Download;

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
  margin-bottom: 40px;

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

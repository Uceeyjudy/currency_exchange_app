import { Box, Typography, useMediaQuery, Stack, Link } from "@mui/material";
import React from "react";
import {BackgroundImage, BackgroundImageMobile, RightArrow} from "./assets/";

const Complaince = () => {
  const mobileScreen = useMediaQuery("(max-width:481px)");
  const backgroundImage = mobileScreen
    ? BackgroundImageMobile
    : BackgroundImage;
  return (
    <Box minHeight="calc(100vh - 580px)">
      <Box width="100%" margin="0px" padding="0px">
        <img src={backgroundImage} alt="backgroundImage" width="100%" />
        <Box
          position="absolute"
          display="flex"
          top="100px"
          left="0"
          sx={{
            minHeight: { xs: "272px", sm: "200px", md: "300px", lg: "380px" },
            minWidth: { xs: "100%", sm: "40%" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "33px", sm: "20px", md: "24px", lg: "33px" },
              lineHeight: { xs: "28px", sm: "40px" },
              fontWeight: { xs: "600", sm: "700" },
            }}
            color="#F8FAFC"
            letterSpacing="-0.02em"
          >
            Compliance
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        margin="60px auto"
        flexDirection="row"
        sx={{
          maxWidth: { xs: "84%", sm: "90%", md: "84%" },
        }}
      >
        <Stack
          sx={{
            maxWidth: { xs: "100%", sm: "90%", md: "588px" },
            gap: { xs: "32px" },
          }}
          direction="column"
        >
          <Typography
            sx={{
              fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "23px" },
              lineHeight: { xs: "28px" },
              fontWeight: { xs: "600", sm: "700" },
            }}
            color="#00296B"
            letterSpacing="-0.02em"
          >
            Meeting and exceeding standards worldwide
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px", sm: "20px" },
              fontWeight: { xs: "400" },
            }}
            color="#1E293B"
            letterSpacing="0.001em"
          >
            Street Rate’s top priority is the privacy and security of our
            customers' information, documents, and data. The compliance content
            on this page explains how Street Rate meets or exceeds national and
            international security standards, including strict security policies
            and practices that set the standard for world-class information
            security. We continually drive industry best practices in
            third-party audits and certifications, third-party assessments, and
            on-site customer reviews.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px", sm: "20px" },
              fontWeight: { xs: "400" },
            }}
            color="#1E293B"
            letterSpacing="0.001em"
          >
            For information on Street Rate’s API service capabilities that help
            you meet specific regulatory requirements,{" "}
            <Link color="#0062FF" fontWeight="00">
              Check here
            </Link>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px", sm: "20px" },
              fontWeight: { xs: "400" },
            }}
            color="#1E293B"
            letterSpacing="0.001em"
          >
            Learn how data governance regulations and standards shape Street
            Rate's security and privacy practices by reading about it{" "}
            <Link color="#0062FF" fontWeight="600">
              Here
            </Link>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "23px", sm: "20px", md: "24px", lg: "23px" },
              lineHeight: { xs: "28px" },
              fontWeight: { xs: "600", sm: "700" },
            }}
            color="#00296B"
            letterSpacing="-0.02em"
            marginTop="20px"
          >
            Highlights of Street Rate’s approach
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px", sm: "20px" },
              fontWeight: { xs: "400" },
            }}
            marginBottom="0px"
            color="#1E293B"
            letterSpacing="0.001em"
          >
            DocuSign’s data governance standards, policies, and procedures are
            informed by a full range of factors, including:
          </Typography>
          <ul>
            <li>
              <Typography
                sx={{
                  fontSize: { xs: "14px" },
                  lineHeight: { xs: "20px", sm: "20px" },
                  fontWeight: { xs: "400" },
                }}
                color="#1E293B"
                letterSpacing="0.001em"
              >
                Continuous monitoring of the security and privacy landscape to
                ensure our approach remains in step and complies with the latest
                state, federal, and international requirements
              </Typography>
            </li>

            <li>
              <Typography
                sx={{
                  fontSize: { xs: "14px" },
                  lineHeight: { xs: "20px", sm: "20px" },
                  fontWeight: { xs: "400" },
                }}
                color="#1E293B"
                letterSpacing="0.001em"
              >
                Adherence to industry regulations, such as 21 CFR Part 11, Annex
                11 (EU), HIPAA, SAFE-BioPharma, and Sarbanes-Oxley
              </Typography>
            </li>

            <li>
              <Typography
                sx={{
                  fontSize: { xs: "14px" },
                  lineHeight: { xs: "20px", sm: "20px" },
                  fontWeight: { xs: "400" },
                }}
                color="#1E293B"
                letterSpacing="0.001em"
              >
                A significant investment in maintaining globally recognized
                certifications and attestations, including enterprise-wide ISO
                27001:2013 certification, PCI-DSS, and SOC 1 Type 2 and SOC 2
                Type 2 reports
              </Typography>
            </li>
          </ul>

          <Stack
            sx={{
              maxWidth: { xs: "100%", sm: "90%", md: "587px" },

              gap: { xs: "20px" },
              fontSize: { xs: "14px" },
              lineHeight: { xs: "17px" },
              fontWeight: { xs: "600", sm: "600" },
            }}
            direction="column"
            color="#334155"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: { xs: "22.5px", sm: "20px", md: "24px", lg: "23px" },
                lineHeight: { xs: "28px" },
                fontWeight: { xs: "700" },
              }}
              color="#00296B"
              letterSpacing="-0.02em"
            >
              Explore compliance resources
            </Typography>

            <Box
              marginTop="20px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding="12px 18px"
              height="41px"
              border="1px solid #94A3B8"
              borderRadius="5px"
            >
              <Typography>Certifications</Typography>
              <img src={RightArrow} alt="right_arrow" />
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding="12px 18px"
              height="41px"
              border="1px solid #94A3B8"
              borderRadius="5px"
            >
              <Typography>Standards</Typography>
              <img src={RightArrow} alt="right_arrow" />
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding="12px 18px"
              height="41px"
              border="1px solid #94A3B8"
              borderRadius="5px"
            >
              <Typography>Public certificates</Typography>
              <img src={RightArrow} alt="right_arrow" />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Complaince;

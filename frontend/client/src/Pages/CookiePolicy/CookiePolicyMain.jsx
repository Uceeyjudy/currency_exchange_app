import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const CookiePolicyMain = () => {
  return (
    <Box marginTop="50px" fontFamily= "'Inter', sans-serif" maxWidth="1440px">
      <Box margin="0px auto" sx={{
          maxWidth: { xs: "84%", sm: "90%", md: "84%" },
        }}>
      <Box>
        <Typography
        sx={{
          fontSize: { xs: "19px", sm: "48px" },
          lineHeight: { xs: "23px", md:"56px" },
          fontWeight: { xs: "700" },
        }}
        color="#1E293B">Cookie Policy</Typography>
        <Typography
        sx={{
          fontSize: { xs: "16px" },
          lineHeight: { xs: "24px" },
          fontWeight: { xs: "400" },
        }}
        marginTop="30px">Effective as of November, 2021</Typography>
        <Typography
        sx={{
          fontSize: { xs: "16px" },
          lineHeight: { xs: "24px" },
          fontWeight: { xs: "400" },
        }}
        marginTop="64px">
          This Cookie Policy of Street Rate Limited (“SR” “we” “us” or “our”)
          explains how cookies are used to keep our site reliable, secure and
          personalized when navigating the streetrate.com website, the App or
          any product or service offered by us through the Website and/or App
          (collectively, “Services”). If you require any more information or
          have any questions about our cookie policy, please feel free to
          contact us by email at info@streetrate.com.
        </Typography>
      </Box>
      <Box>
        <Typography
        sx={{
          fontSize: { xs: "20px" },
          lineHeight: { xs: "28px" },
          fontWeight: { xs: "600" },
        }}
        marginTop="64px">What are cookies</Typography>
        <Typography
        sx={{
          fontSize: { xs: "16px" },
          lineHeight: { xs: "24px" },
          fontWeight: { xs: "400" },
        }}>
          A cookie is a small data file that is written to your computer’s hard
          drive by your web browser. A cookie file can contain and/or
          automatically collect user information, such as a user identification
          code or IP address, that a website will use to track the pages and
          number of times you have visited. The data read from these cookies may
          be linked to your user information, so our use of these cookies may
          allow us to better understand how you use our Site, to serve you a
          better browsing experience, and improve the quality of our products.
        </Typography>
      </Box>
      <Box>
        <Typography
        sx={{
          fontSize: { xs: "20px" },
          lineHeight: { xs: "28px" },
          fontWeight: { xs: "600" },
        }}
        marginTop="64px"
        marginBottom="8px"
        color="#1E293B">How we use cookies</Typography>
        <Typography>
            We use cookies in a range of ways to improve your experience on our
            site including:
          </Typography>
        <ul>
          <li>
            Providing you with tailored content and advertisements(see below for
            more information),
          </li>
          <li>Safeguarding against spam and malware,</li>
          <li>Analyzing trends, traffic and user behaviour,</li>
          <li>Administering the site,</li>
          <li>
            Gathering demographic information about our user base as a whole,
          </li>
          <li>
            Tracking web and advertising analytics throughout the Site and its
            affiliate websites,
          </li>
          <li>Performing location-related functionalities and analytics,</li>
          <li>Participating in market research (e.g., Site ratings), and</li>
          <li>
            Educating ourselves about how we can continue to improve the Site
            and its various elements
          </li>
        </ul>

        <Stack
        direction="column"
        alignItems="flex-start"
        gap="20px"
        marginTop="64px">
          <Typography
          sx={{
            fontSize: { xs: "20px" },
            lineHeight: { xs: "28px" },
            fontWeight: { xs: "600" },
          }}
          >Types of cookies we use</Typography>
          <Box>
            <Typography
            sx={{
              fontSize: { xs: "16px" },
              lineHeight: { xs: "24px" },
              fontWeight: { xs: "600" },
            }}>Required Cookies</Typography>
            <Typography
            sx={{
              fontSize: { xs: "16px" },
              lineHeight: { xs: "24px" },
              fontWeight: { xs: "400" },
            }}>
              Required Cookies Certain cookies are used for specific purposes
              that are essential to your secure use and navigation of the Site.
              Without them, SR may not be able to provide core Site functions
              and features to you, and the Site would not operate as well as you
              or SR would like. These cookies collect and use information such
              as your server preferences, single-session data and corresponding
              identifier, web beacons and log files, and other
              credential-related information.
            </Typography>
          </Box>
          <Box>
            <Typography
            sx={{
              fontSize: { xs: "16px" },
              lineHeight: { xs: "24px" },
              fontWeight: { xs: "600" },
            }}>Functional Cookies </Typography>
            <Typography
            sx={{
              fontSize: { xs: "16px" },
              lineHeight: { xs: "24px" },
              fontWeight: { xs: "400" },
            }}>
              Other cookies may be used to collect and process information about
              your preferences and similar choices in connection with the Site
              in order to optimize your browsing experience (e.g., various local
              preference settings; which geographically-customized version of
              the Site and related content you may prefer). Functional cookies
              also include analytics cookies, which provide us with data that
              allows Us to better understand its users and improve the Site
              based on what we have learned from that data.
            </Typography>
          </Box>
          <Box>
            <Typography
            sx={{
              fontSize: { xs: "16px" },
              lineHeight: { xs: "24px" },
              fontWeight: { xs: "600" },
            }}>Advertising Cookies </Typography>
            <Typography
            sx={{
              fontSize: { xs: "16px" },
              lineHeight: { xs: "24px" },
              fontWeight: { xs: "400" },
            }}>
              To help support the Site and further tailor your experience, SR
              and its advertising partners (and/or their third-party analytics
              providers) may also use cookies on the Site to personalize the
              content and advertisements you may be shown. Such advertisements
              use cookies to provide you targeted advertisements that may be
              more consistent with your interests than non-targeted
              advertisements. Certain SR advertising partners may also use
              cookies to monitor or track the performance of their advertising
              content, including native advertising content. SR does not provide
              user information to advertising partners except in connection with
              the Site or as required by law.
            </Typography>
          </Box>
        </Stack>
        <Box>
          <Typography
          sx={{
            fontSize: { xs: "20px" },
            lineHeight: { xs: "28px" },
            fontWeight: { xs: "600" },
          }}
          marginTop="64px">How to block cookies</Typography>
          <Typography
          sx={{
            fontSize: { xs: "16px" },
            lineHeight: { xs: "24px" },
            fontWeight: { xs: "400" },
          }}>
            You can choose to control and/or block cookies by activating the
            settings on your browser that allow you to refuse the setting of all
            or some cookies. However, if you use your browser settings to block
            all cookies (including essential cookies) you may not be able to
            access parts of the website. Your browser settings also allow you to
            delete all cookies stored on your device whenever you wish. For more
            details, see aboutcookies.org.
          </Typography>
        </Box>
        <Box
        marginBottom="120px">
          <Typography
          sx={{
            fontSize: { xs: "20px" },
            lineHeight: { xs: "28px" },
            fontWeight: { xs: "600" },
          }}
          marginTop="64px">Updates and changes</Typography>
          <Typography
          sx={{
            fontSize: { xs: "16px" },
            lineHeight: { xs: "24px" },
            fontWeight: { xs: "400" },
          }}
          >
            We may update this Cookie Policy from time to time by posting a new
            version on our website. You should check our website frequently for
            any updates or changes to this Cookie Policy, which may affect you.
          </Typography>
        </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default CookiePolicyMain;

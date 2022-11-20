import {
  Accordion,
  Stack,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Link
} from "@mui/material";
import React from "react";
import {DownArrow} from "../assets/index"

const DropDown = ({ title, Items, Links }) => {
  return (
    <>
      <Accordion
        style={{
          backgroundColor: "inherit",
          boxShadow: "none",
          color: "#F8FAFC",
          width: "200px",
          border: "none",
        }}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          expandIcon={<img src={DownArrow} alt="down_arrow" />}
        >
          <Typography
            marginRight="5px"
            sx={{
              fontSize: { xs: "19px" },
              lineHeight: { xs: "23px" },
              fontWeight: { xs: "700" },
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            direction="column"
            alignItems="center"
            display="flex"
            gap="16px"
            fontSize="14px"
            fontWeight="400"
            lineHeight="20px"
            color="#F8FAFC"
            letterSpacing="0.001em"
            textAlign="center"
          >
            {Items.map((item) => (
                <Link href={`/${Links[Items.indexOf(item)]}`} color="inherit" key={Items.indexOf(item)}>
                  {item}
                </Link>
              ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default DropDown;
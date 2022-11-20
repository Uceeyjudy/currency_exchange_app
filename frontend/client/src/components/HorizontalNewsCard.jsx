import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function HorizontalNewsCard({ data }) {
  return (
    <Box
      minHeight={112}
      bgcolor="primary"
      sx={{
        width: { xs: "100%", sm: "100%", lg: "90%", md: "90%" },
        margin: "auto 0",
        marginBottom: 3,
        display: "flex",
      }}
    >
      <img src={data.img} alt="i" height="100%" />
      <Stack
        sx={{
          paddingLeft: 3,
        }}
        justifyContent="space-around"
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: { sm: "16px", md: "16px", lg: "16px", xs: "12px" },
            lineHeight: "19px",
            color: "#7C7C7C",
          }}
        >
          {data.date} | {data.time}
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: { sm: "20px", md: "20px", lg: "20px", xs: "14px" },
            lineHeight: { md: "24px", xs: "19px" },
            color: "#0F172A",
          }}
          variant="h3"
        >
          {data.title}
        </Typography>
      </Stack>
    </Box>
  );
}

HorizontalNewsCard.propTypes = {
  data: PropTypes.object.isRequired,
};

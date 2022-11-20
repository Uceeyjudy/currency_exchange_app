import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export default function StoriesNews({ data }) {
  return (
    <Box
      sx={{
        flex: 1,
        background: "#F7F7F7",
        borderRadius: "4px",
        padding: 2,
      }}
    >
      <img src={data.img} alt="story imag" width="100%" />
      <Typography
        variant="h4"
        sx={{
          fontWeight: "500",
          fontSize: { lg: "24px", md: "20px", sm: "20px", xs: "20px" },
          lineHeight: "144.02%",
          color: "#0F172A",
          paddingTop: 1.5,
          paddingBottom: 1.5,
        }}
      >
        {data.title}
      </Typography>
      <Stack direction="column">
        <Typography
          variant="p"
          sx={{
            color: "#1E293B",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "143.52%",
          }}
        >
          {data.label}
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "#64748B",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "143.52%",
            paddingTop: 1.5,
          }}
        >
          {data.view} || {data.date}
        </Typography>
      </Stack>
    </Box>
  );
}

StoriesNews.propTypes = {
  data: PropTypes.object.isRequired,
};

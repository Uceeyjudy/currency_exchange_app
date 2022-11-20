import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CardArticles({ data }) {
  return (
    <Box
      sx={{
        background: "#F7F7F7",
        width: "90%",
        margin: "auto",
        borderRadius: "4px",
        padding: 2,
        marginBottom: 4,
      }}
    >
      <img src={data.img} alt="article img" width="100%" />
      <Typography
        variant="h4"
        mt={1}
        sx={{
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "144.02%",

          color: "#0F172A",
        }}
      >
        {data.title}
      </Typography>
      <Stack direction="row" mt={1} mb={1} gap={2}>
        <Typography
          variant="p"
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "143.52%",

            color: "#0F172A",
          }}
        >
          {data.author}
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "143.52%",

            color: "#0F172A",
          }}
        >
          {data.date}
        </Typography>
      </Stack>
      <Typography
        variant="p"
        sx={{
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "144.02%",
          color: "#0F172A",
        }}
      >
        {data.intro}
      </Typography>
      <Box mt={2} pb={2}>
        <Link
          to="/news"
          style={{
            color: "#0064F1",
          }}
        >
          Continue Reading
        </Link>
      </Box>
    </Box>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

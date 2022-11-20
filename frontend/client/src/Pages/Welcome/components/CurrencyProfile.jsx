import React from "react";
import { Box, Typography } from "@mui/material";
import { US, Ghana, Canada, Australia, Japan } from "../assets";

const CurrencyProfile = () => {
  const Card = ({ title, image }) => {
    return (
      <Box
        sx={{
          gap: "10px",
          display: "flex",
          flexDirection: "column",
          maxHeight: {xs:"140px", sm: "160px", md: "140px" },
          padding: {xs:"24px", sm: "18px", md: "24px" },
          backgroundColor: "#FFFFFF",
          alignItems: "flex-start",
          boxShawdow: "0px 1px 0px #E2E8F0",
          borderRadius: "6px",
        }}
      >
        <Box
          sx={{
            gap: "8px",
            display: "flex",
            flexDirection: "row",
            maxHeight: "32px",
            alignItems: "center",
          }}
        >
          <img src={image} alt="currencyImage" />

          <Typography
            sx={{ fontSize: {xs:"18px", sm: "15px", md: "18px" } }}
            lineHeight="28px"
            fontWeight="500"
            color="#393D48"
          >
            {title}
          </Typography>
        </Box>

        <Typography
          sx={{ fontSize: {xs:"14px", sm: "12px", md: "14px" } }}
          lineHeight="20px"
          fontWeight="400"
          color="#6D6D6D"
        >
          US Dollar is the currency of the United States of America widely used
          in transactions.
        </Typography>
      </Box>
    );
  };
  return (
    <Box sx={{ maxWidth: { xs: "95%", sm: "90%", lg: "84%" } }} margin="auto">
      <Box
        display="flex"
        sx={{
          alignItems: { xs: "center", md: "flex-start" },
          maxWidth: { sm: "100%", md: "625.81px" },
        }}
        flexDirection="column"
        gap="8px"
      >
        <Typography
          fontSize="16px"
          lineHeight="16px"
          letterSpacing="5px"
          fontWeight="500"
          color="#3381FF"
        >
          CURRENCY PROFILE
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "25px", sm: "20px", md: "28px" },
            textAlign: { xs: "center", md: "left" },

            lineHeight: { xs: "34px", sm: "40px" },
          }}
          fontWeight="800"
          color="#262A36"
        >
          Learn more about these currencies in the exchange market
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          gap: "24px",
          display: "flex",
          flexDirection: "column",
          filter: "drop-shadow(0px 6px 12px rgba(170, 170, 170, 0.11))",
          margin: {xs:"30px auto",sm:"56px auto"},
        }}
      >
        <Box
          spacing={2}
          sx={{
            gap: { xs: "16px", sm: "24px" },
            display: { xs: "flex" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Card title={"USD - US Dollar"} image={US} />
          <Card title={"GHC - Ghanaian Cedis"} image={Ghana} />
          <Card title={"CAD - Canadian Dollars"} image={Canada} />
        </Box>

        <Box
          spacing={2}
          sx={{
            gap: { xs: "16px", sm: "24px" },
            display: { xs: "flex" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Card title={"AUD - Australian Dollars"} image={Australia} />
          <Card title={"AUD - Australian Dollars"} image={Australia} />
          <Card title={"JPY - Japanese Yen"} image={Japan} />
        </Box>

        <Box
          spacing={2}
          sx={{
            gap: { xs: "16px", sm: "24px" },
            display: { xs: "flex" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Card title={"AUD - Australian Dollars"} image={Australia} />
          <Card title={"AUD - Australian Dollars"} image={Australia} />
          <Card title={"AUD - Australian Dollars"} image={Australia} />
        </Box>
      </Box>
    </Box>
  );
};

export default CurrencyProfile;

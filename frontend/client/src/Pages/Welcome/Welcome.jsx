import React from "react";
import { Box } from "@mui/material";
import CurrencyProfile from "./components/CurrencyProfile";
import Liveprice from "./currencyRate/LiveRate";
import Download from "./components/Download";

function Welcome() {
  return (
    <Box maxWidth="100%">
      <Liveprice />
      <CurrencyProfile />
      <Download />
    </Box>
  );
}

export default Welcome;

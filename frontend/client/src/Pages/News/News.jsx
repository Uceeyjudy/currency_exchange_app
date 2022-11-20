import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import HorizontalNewsCard from "./../../components/HorizontalNewsCard";
import MainNewsCard from "./../../components/MainNewsCard";

import StoriesNews from "./../../components/StoriesNews";
import { news, stories } from "./staticData";
export default function News() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Box
        margin="0px auto"
        sx={{
          width: { xs: "90%", sm: "95%", md: "84%" },
        }}
      >
        <Box
          sx={{
            marginLeft: "auto",
            display: { xs: "none", sm: "block", md: "block", lg: "block" },
            marginTop: 4,
          }}
        >
          <Stack
            direction="row"
            sx={{
              gap: { sm: "9px", md: "20px", lg: "24px" },
              paddingLeft: 0.2,
            }}
          >
            <Typography variant="p">All</Typography>
            <Typography variant="p">Stocks</Typography>
            <Typography variant="p">Crypto</Typography>
            <Typography
              variant="p"
              sx={{
                position: "relative",
                cursor: "pointer",
              }}
            >
              Currencies
              <div
                style={{
                  position: "absolute",
                  bottom: -9,
                  border: "none",
                  height: 4,
                  width: "100%",
                  background: "#0051C3",
                  borderRadius: 2,
                }}
              />
            </Typography>
            <Typography variant="p">Indicies</Typography>
            <Typography variant="p">Future</Typography>
            <Typography variant="p">Bonds</Typography>
            <Typography variant="p">World economy</Typography>
          </Stack>
          <Divider
            sx={{
              height: 4,
              background: "#F7F7F7",
              borderRadius: 2,
              marginTop: 0.7,
              border: "none",
            }}
          />
        </Box>
      </Box>
      <Container>
        <Grid
          spacing={2}
          sx={{
            display: { xs: "block", sm: "block", lg: "flex", md: "flex" },
          }}
          gap={3}
          mt={3}
        >
          <MainNewsCard />
          <Grid
            flex={2}
            p={2}
            sx={{
              background: "#FAFAFA",
              borderLeft: "1px solid #D4D4D4",
              borderRadius: "4px",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "500",
                fontSize: "24px",
                lineHeight: "144.02%",
              }}
            >
              Trending News
            </Typography>
            <Box mt={2}>
              {news.map((c) => (
                <HorizontalNewsCard key={c.id} data={c} />
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box mt={1.4}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "144.02%",
              color: "#0F172A",
            }}
          >
            Top Stories
          </Typography>
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "column", md: "row" },
              marginTop: 2,
              paddingBottom: 5,
            }}
            gap={3}
          >
            {stories.map((s) => (
              <StoriesNews key={s.id} data={s} />
            ))}
          </Stack>
        </Box>
        <Stack
          flex={2}
          sx={{
            width: "100%",
            background: "#FAFAFA",
            borderRadius: "4px",
            display: { xs: "block", sm: "block", md: "none" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "144.02%",
              background: "#fff",
            }}
          >
            Trending News
          </Typography>
          <Box
            mt={2}
            sx={{
              background: "#fff",
            }}
          >
            {news.map((c) => (
              <HorizontalNewsCard key={c.id} data={c} />
            ))}
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

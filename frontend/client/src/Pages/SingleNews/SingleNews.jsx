import { Box, Breadcrumbs, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import neww from "../../assets/News_img/e.png";
import { articles } from "./staticData";
import CardArticles from "../../components/CardArticles";
export default function SingleNews() {
  return (
    <div>
      <Box
        margin="0px auto"
        sx={{
          width: { xs: "90%", sm: "95%", md: "84%" },
        }}
      >
        <Stack
          sx={{
            flexDirection: { md: "row", sm: "block", xs: "block" },
            height: "100%",
          }}
        >
          <Box
            flex={2}
            sx={{
              marginTop: 5,
              borderBottom: {
                sm: "1px solid #E2E8F0",
                xs: "1px solid #E2E8F0",
                md: "none",
              },
            }}
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                color="#64748B"
                to="/news"
                style={{
                  fontWeight: "400",
                  fontSize: { md: "16px", sm: "14px", xs: "12px" },
                  lineHeight: "19px",
                  textDecoration: "none",
                }}
              >
                News
              </Link>
              <Typography
                color="#0062FF"
                sx={{
                  fontWeight: "400",
                  fontSize: { md: "16px", sm: "14px", xs: "12px" },
                  lineHeight: "19px",
                  textDecoration: "none",
                }}
              >
                Currencies
              </Typography>
            </Breadcrumbs>
            <Grid
              sx={{
                width: "90%",
              }}
            >
              <Box display="flex" flexDirection="column" mb={3}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "500",
                    fontSize: {
                      md: "26px",
                      lg: "30px",
                      sm: "22px",
                      xs: "20px",
                    },
                    lineHeight: { md: "29px", sm: "132.52%", xs: "132.52%" },
                    marginTop: 2,
                    color: "#0F172A",
                  }}
                  mb={2}
                >
                  Global stocks rally, dollar drops as U.S. inflation data spurs
                  optimism
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "144.02%",
                    color: "#64748B",
                    marginBottom: 2,
                  }}
                >
                  By:{" "}
                  <span
                    style={{
                      color: "#0F172A",
                      fontWeight: "600",
                    }}
                  >
                    Chudi Victor
                  </span>
                </Typography>
                <Typography variant="p" width="100%">
                  15 November, 2022 9:45pm
                </Typography>
              </Box>
              <img
                src={neww}
                alt="img for news"
                width="100%"
                style={{
                  borderRadius: "4px",
                }}
              />
              <Box pb={7}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "24px",
                    marginTop: 2,
                    marginBottom: 2,
                    color: "#0F172A",
                  }}
                >
                  Introduction
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "144.02%",
                  }}
                >
                  Global stock rallied as the dollar and bond yields slid
                  further on tuesday after more data signaled U.S inflation was
                  off its peak, while an improving outlook for china’s economy
                  gave investors plenty to cheer.
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "24px",
                    marginTop: 2,
                    marginBottom: 2,
                    color: "#0F172A",
                  }}
                >
                  Currencies Gain
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "144.02%",
                  }}
                >
                  Curriences gained against the greenback as the euro, yen and
                  sterling all rose and the Canadian dollar USDCAD hit an
                  eight-week high after the Labor Department reported U.S
                  producer prices increased less than expected in October. Spot
                  gold GOLD extended gains, euro zone and Treasury yields slid
                  further and stock volatility in Europe (.V2TX) hit a fresh
                  10-month low as the U.S producer price index (PPI) for final
                  demand rose 0.2%.
                </Typography>
                <Box
                  sx={{
                    borderLeft: "2px solid #0064F1",
                    paddingLeft: 2,
                    marginTop: 2,
                    marginBottom: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "144.02%",
                      color: "#0F172A",
                      paddingBottom: 1,
                    }}
                  >
                    “ Market is sniffing out the end of the Fed rate hike
                    cycle,” said Peter Duffy, chief investment officer of credit
                    at Penn Capital Management Co LLC in Philadelphia.
                  </Typography>
                  <Typography
                    variant="span"
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "144.02%",

                      color: "#64748B",
                    }}
                  >
                    Chudi Victor
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "24px",
                    marginTop: 2,
                    marginBottom: 2,
                    color: "#0F172A",
                  }}
                >
                  Big Moves
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "144.02%",
                  }}
                >
                  Big moves in the dollar, among other assets, suggested
                  investors were dramaticly changing their positions after the
                  CPI and PPI reports, said Marc Chandler, chief market
                  strategist at Bannockburn Global Forex in New York
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "24px",
                    marginTop: 2,
                    marginBottom: 2,
                    color: "#0F172A",
                  }}
                >
                  The Pace
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "144.02%",
                  }}
                >
                  The pace and the momentum speaks to a major turn, and the
                  euphoria, he said. “It’s like a big push on an open door. The
                  pull-back we’ve seen, the dollar sells off last week sharply,
                  some of the currencies were three standard deviation”
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "24px",
                    marginTop: 2,
                    marginBottom: 2,
                    color: "#0F172A",
                  }}
                >
                  The Market
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "144.02%",
                  }}
                >
                  The market is reading that the Biden-Xi meeting is a
                  watershed, but the U.S still sanctions Chinese semiconductors
                  and Canada is getting tougher on Chinense investments in
                  Canadian mining and metals sectors.
                </Typography>
              </Box>
            </Grid>
          </Box>
          <Box flex={1} height="100%">
            <Box
              sx={{
                width: { md: "90%", sm: "100%", xs: "100%" },
                minHeight: "100vh",
                background: { md: "#FAFAFA", sm: "#fff", xs: "#fff" },
                borderLeft: { md: "1px solid #D4D4D4" },
                height: "100%",
                padding: { md: "0px 15px", sm: "5px", xs: "5px" },
              }}
            >
              <Box>
                <Box pt={5}>
                  <Stack
                    direction="column"
                    sx={{
                      display: { sm: "none", xs: "none", md: "flex" },
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{
                        color: "#0F172A",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "144.02%",
                        marginBottom: 1,
                      }}
                    >
                      Introduction
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        color: "#475569",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "144.02%",
                        marginBottom: 1,
                      }}
                    >
                      Currencies Gain
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        color: "#475569",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "144.02%",
                        marginBottom: 1,
                      }}
                    >
                      Chudi’s Quote
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        color: "#475569",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "144.02%",
                        marginBottom: 1,
                      }}
                    >
                      Big Moves
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        color: "#475569",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "144.02%",
                        marginBottom: 1,
                      }}
                    >
                      The Pace & The Market
                    </Typography>
                  </Stack>
                </Box>
                <Box pt={1}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "24px",

                      color: "#0F172A",
                    }}
                  >
                    Similar article
                  </Typography>
                  <Stack pt={2} pb={3}>
                    {articles.map((a) => (
                      <CardArticles key={a.id} data={a} />
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

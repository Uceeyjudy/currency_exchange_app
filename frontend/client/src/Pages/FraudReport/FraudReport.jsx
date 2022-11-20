import { Box, Typography, Stack, styled } from "@mui/material";
import React from "react";

import ads from "./ads.png"
import confident from "./confident.png"
import registered from "./registered.png";
import payments from "./payments.png"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';

const content = [
    {
        "title": "Never be too confident",
        "body": "It is an illusion for anyone to believe that it is impossible to fall victim of fraud. Conventional wisdom recommends that we be on guard always as scammers everywhere are incredibly deceptive and can ensnare even the most intelligent amongst us.",
        "img": confident
    },
    {
        "title": "Be Careful of Ads",
        "body": "Conduct a background check on any pop up Ads. There should be no sharing of personal details such as bank account number. Scams are often designed to create a sense of urgency. Take time to ask questions and think it through. Do not be in a hurry to give any personal financial Information to any currency exchange agency.",
        "img": ads
    },
    {
        "title": "Use only registered agencies",
        "body": "If you're exchanging currency from any agency, there's no reason why you should have to meet at someone's home (the buyer or seller insists that you come over to their house, approach with caution). Instead, meet in a well-lit, public place. Exchange your currencies only from registered organisations.",
        "img": registered
    },
    {
        "title": "Payments are strictly prohibited on StreetRates",
        "body": "No Payments should be made for on StreetRates Website. The site is solely for currency conversion and has no affiliations whatsoever with Banks or Black market money changers.",
        "img": payments
    }
]

const links = [
    "mailto:cpd@cbn.gov.ng",
    "https://www.specialfraudunit.org.ng/en/?page_id=80",
    "https://scamwatch.ng/forms/report-scam",
    "https://www.efcc.gov.ng/report-complaints",
    "https://www.europol.europa.eu/report-a-crime/report-cybercrime-online",
    "https://www.efcc.gov.ng/report-complaints",
    "https://www.specialfraudunit.org.ng/en/?page_id=80",
]

const HeroText = () => {
    return <Typography variant="h5" component="h6" sx={{
        color: "#fff"
    }}>
        Report Fraud
    </Typography>
}

const BodyContentTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
    },
    color: "#111111"
}))

const Body2Text = styled(Typography)(({ theme }) => ({
    color: "#4B4B4B"
}))


const Hero = () => {
    return <Box sx={{
        width: "100%",
        bgcolor: "#00296B",
        height: "15vh", //25vh

    }}>
        <Box sx={{
            margin: "0px auto",
            maxWidth: { xs: "90%", sm: "95%", md: "84%" },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "left",
            height: "100%"
        }}>
            <HeroText />
        </Box>
    </Box>
}

const Left = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
        width: "70%"
    },
    [theme.breakpoints.up("md")]: {
        width: "60%"
    },
}))

const Right = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "0 !important",
        padding: "0 !important"
    },
    [theme.breakpoints.up("sm")]: {
        width: "30%"
    },
    [theme.breakpoints.up("md")]: {
        width: "40%"
    },
}))

const ListItem = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "25px 0",
    [theme.breakpoints.down("sm")]: {
        height: "100%",
        display: "none"
    },

    [theme.breakpoints.up("md")]: {
        height: "26vh"
    },
    width: "100%",
    boxSizing: "border-box"

}))

const ListItemImageBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        width: "30%"
    },
    [theme.breakpoints.down("md")]: {
        width: "35%"
    },
    width: "20%",
    height: "100%",

}))

const ListItemTextBox = styled(Box)(({ theme }) => ({
    width: "79%",
    [theme.breakpoints.up("md")]: {
        width: "68%"
    },
    [theme.breakpoints.down("md")]: {
        width: "63%"
    },
}))

const ListBox = styled(Box)(({ theme }) => ({

    [theme.breakpoints.down("sm")]: {
        width: "100%"
    },
}))

const List = () => {
    return <ListBox>
        {content.map(item => <ListItem className="list-item">

            <ListItemImageBox>
                <img height="100%" width="100%" alt="img" src={item.img} />
            </ListItemImageBox>
            <ListItemTextBox

            >
                <Typography variant="h6" sx={{
                    mb: 1
                }}>{item.title}</Typography>
                <Body2Text variant="body2" sx={{
                    fontSize: "14px"
                }}>{item.body}</Body2Text>
            </ListItemTextBox>
        </ListItem>)}
        <MobileList>
            {content.map(item => <MobileListContent sx={{
                marginBottom: "15px !important"
            }} className="mobile-list" img={item.img} title={item.title} text={item.body} />)}

        </MobileList>
    </ListBox>
}

const MobileListContent = ({ img, title, text }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: "auto", marginBottom: "20px !important", }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt={title}
                />
                <CardContent>
                    <BodyContentTitle gutterBottom sx={{
                        fontWeight: 400,
                        fontSize: "18px"
                    }} variant="h6" component="h6">
                        {title}
                    </BodyContentTitle>
                    <Body2Text variant="body2" color="text.secondary">
                        {text}
                    </Body2Text>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

const MobileList = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("sm")]: {
        display: "block",
        margin: "20px 0 40px 0",
        width: "100% !important",
    },
}))

const ComplaintLink = ({ link }) => {
    return <a href={link}> <Body2Text variant="body2" sx={{
        color: "#005BEA",
        mb: 1
    }} component="p">{link.includes("mailto:") ? link.split("mailto:")[1] : link}</Body2Text></a>
}

const ComplaintLinks = () => {
    return links.map(link => <ComplaintLink link={link} />)
}

const BodyContent = styled(Stack)(({ theme }) => ({
    width: "100%",
    margin: "20px 0",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column"
    }
}))

const Body = () => {
    return <Box sx={{
        width: "100%",

    }}>
        <Box sx={{
            margin: "0px auto",
            maxWidth: { xs: "90%", sm: "95%", md: "84%" },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "left",
            height: "100%"
        }}>
            <BodyContent
                direction="row" spacing={2} justifyContent="space-between"
            > <Left sx={{
            }} >
                    <Box>
                        <BodyContentTitle variant="h5" component="h6" sx={{
                            mb: 3
                        }}>Avoid and Report Fraud</BodyContentTitle>
                        <Body2Text variant="body2" component="p" sx={{
                        }}>
                            By focusing on providing the best user experience, Street rates has earned a trusted brand name. Unfortunately, unscruptulous people sometimes try to use the StreetRates website for fraud. Below are a few ways to avoid and report fraud.
                        </Body2Text>
                    </Box>

                    <List />
                </Left>
                <Right>
                    <Box>
                        <BodyContentTitle variant="h5" component="h6" sx={{
                            mb: 3
                        }}>Get response as quickly as possible</BodyContentTitle>
                        <Body2Text variant="body2" sx={{
                            margin: "25px 0",
                        }}>If you would like to report fraud, please use the <a sx={{
                            color: "red"
                        }} href="/complaint"><Typography variant="span" sx={{
                            color: "#005BEA"
                        }}>File a complaint</Typography></a>  option. If you’re not getting the desired response, you can contact the appropriate investigative agencies below:
                        </Body2Text>
                        <ComplaintLinks />
                    </Box>
                </Right></BodyContent>
        </Box>
    </Box>
}

const FraudReport = () => {
    return <Stack direction="column" sx={{
    }}
        minHeight="100px"
        display="flex"
        margin="0px auto"
    >
        <Box sx={{
            width: "100%",
            height: "100%"
        }}>

            <Hero />
        </Box>
        <Body />
    </Stack>

}

export default FraudReport;
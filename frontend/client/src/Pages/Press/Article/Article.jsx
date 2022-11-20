import React from 'react'

import {ImFacebook2,} from 'react-icons/im'
import {BiDownload,} from 'react-icons/bi'
import {BsBell, BsLinkedin, BsInstagram, BsTwitter} from 'react-icons/bs'
import {Container, Date, Header, Articles, ArticlesSub, BottomText, SocialLinks, SocialIcons, SocialIconLink, Buttons, Button, Contact, ContactHeader} from './Article.styled'

const Article = () => {
  return (
    <>
        <Container>
            <Date>
            16 November 2022, 03:13 PM (W.A.T.)
            </Date>
            <Header>
            StreetRate: Know the real exchange rates of every country currency, with advance User experience
            </Header>
            <Articles>
                <p>StreetRate is a platform that allows Users to receive/view instant conversion rates using customized areas, real-time charts that fit the Economy value, and a historical conversion record from one week to one year and to enhance the customer experience.</p>

                <p>The goal of Streetrate App is to provide the most up-to-date, reputable currency information of any country of the user choice and is secure, reliable, easy to use and API implementation in e-commerce platforms.</p>

                <ArticlesSub>
                    <h5>The Existence of StreetRate App</h5>
                    <ul>
                        <li>
                            Gives real time exchange rates for every country's currency to naira
                        </li>
                        <li>
                            It has a comment section where other users can ask for real street exchange rate in real time
                        </li>
                        <li>
                            The app has an up-to-date list of the exchange rate of all country's currency converted to any country currency
                        </li>
                        <li>
                            There is a currency chart where you can review market history and analyze rate trends for any currency pair.
                        </li>
                        <li>
                        The app has a rate alert, it will let you know when the exchange rate you want has gotten to the specific rate on the currency pair you chose.
                        </li>
                        <li>
                        There is live tracking and notifications, flexible delivery and payment options.
                        </li>
                        <li>
                        You also get access to the rate history of any previous day
                        </li>
                        <li>
                        It offers local exchange rates for travelers, tourists, businesses and consumers.
                        </li>

                        <p>
                        The team developers have been working hard and burning the midnight oil for more than a year now to develop this exchange rate App called StreetRate, and they are now ready to socialize their findings and research with you.
                        </p>

                        <BottomText>
                        Check and Know the exchange rate at your fingertips
                        </BottomText>
                    </ul>
                </ArticlesSub>
                <SocialLinks>
                    <SocialIcons>
                        <SocialIconLink href='/' ><ImFacebook2/></SocialIconLink>
                        <SocialIconLink href='/' ><BsInstagram/></SocialIconLink>
                        <SocialIconLink href='/' ><BsLinkedin/></SocialIconLink>
                        <SocialIconLink href='/' ><BsTwitter/></SocialIconLink>
                        

                    </SocialIcons>
                    <Buttons>
                        <Button primary>Share <BsBell/> </Button>
                        <Button >Download <BiDownload/> </Button>
                    </Buttons>
                </SocialLinks>
            </Articles>
            <Contact>
                <ContactHeader>Get in touch</ContactHeader>
                <h1>Would You Like To Speak With Our Press Team</h1>
                <h1>press@streetrates.com</h1>
            </Contact>
        </Container>
    </>
  )
}

export default Article
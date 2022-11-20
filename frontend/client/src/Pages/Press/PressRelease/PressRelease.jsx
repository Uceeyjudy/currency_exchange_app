import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi';
import { Container, Heropage, NewsSection, Nav, NavLinks, NavItems, Cards, Card, NewsButton, Search, TopicButton, Team, TeamHeader, TeamCards, TeamCard, Contact, ContactHeader, Button } from './Press.styled'
import img1 from '../assets/Image (1).png'
import img2 from '../assets/Image (2).png'
import img3 from '../assets/Image (3).png'
import img4 from '../assets/Rectangle 163.png'
import img5 from '../assets/Rectangle 164.png'
import img6 from '../assets/Rectangle 165.png'
import img7 from '../assets/Rectangle 166.png'
import img8 from '../assets/Rectangle 167.png'
import { NavLink, Link } from 'react-router-dom'
// import { Link } from 'react-scroll'



const data = [
    {
        id: 1,
        image: img1,
        desc: 'StreetRate: Know the real exchange rates of every country currency, with advance User experience',
        link: '/',
        date: 'Nov 28, 2022'
    },
    {
        id: 1,
        image: img2,
        desc: "A Products frelancer's say has been of great help ton them",
        link: '/',
        date: 'Nov 26, 2022'
    },
    {
        id: 1,
        image: img3,
        desc: "StreetRate is a cut above the rest: Here's Ten Reasons why",
        link: '/',
        date: 'Nov 26, 2022'
    },
    {
        id: 1,
        image: img1,
        desc: 'StreetRate: Know the real exchange rates of every country currency, with advance User experience',
        link: '/',
        date: 'Nov 24, 2022'
    },
    {
        id: 1,
        image: img2,
        desc: "A Products frelancer's say has been of great help ton them",
        link: '/',
        date: 'Nov 22, 2022'
    },
    {
        id: 1,
        image: img3,
        desc: "StreetRate is a cut above the rest: Here's Ten Reasons why",
        date: 'Nov 16, 2022'
    },
];

const team = [
    {
        id: 1,
        image: img4,
        name: 'Mark Essien',
        title: 'CEO/Co-founder'
    },
    {
        id: 1,
        image: img5,
        name: 'Oti Esther Nenna',
        title: 'CEO'
    },
    {
        id: 1,
        image: img6,
        name: 'Kenny Ihenacho',
        title: 'Head of Press'
    },
    {
        id: 1,
        image: img7,
        name: 'Flourish Ralph',
        title: 'VC Press'
    },
    {
        id: 1,
        image: img8,
        name: 'Adalhueze',
        title: 'Press Liason Officer'
    },
];


const PressRelease = () => {
  return (
    <>
        <Container>
            <Heropage>
                <h5>Press + Media </h5>
                <h1>Word on the street: <br/>
                StreetRate, A Parralel market Currency Exchange Rate Product Is Lauching
                </h1>
                <Link  to='/press/article'>
                    <Button primary>Read More</Button>
                </Link>
            </Heropage>

            <NewsSection>
                <Nav>
                    <NavLinks>
                        <NavLink to='/press'  style={({ isActive }) => 
                      (isActive ? { borderBottom: '4px solid #00296B', color: '#0046B5'} : {color: '#000000'})}>In The News</NavLink>
                        <NavLink to='/press/news' style={({ isActive }) => 
                        (isActive ? {borderBottom: '4px solid #00296B', color: '#0046B5'} : {color: '#000000'})}> Press Release</NavLink>
                    </NavLinks>
                    <NavItems>
                        <Search placeholder='Search Topics'>
                            Search Topics<BiSearchAlt2 />
                        </Search>
                        <TopicButton>Popular Topics</TopicButton>
                    </NavItems>
                </Nav>

                <Cards>
                    {data.map(({id, image, desc, link, date }) => {
                        return (
                            <Card key={id}>
                                <p>{date}</p>
                                <img src={image} alt="" />
                                <hr/>
                                <h3>{desc}</h3>
                                <a href={link}>Read Article</a>
                            </Card>
                        )
                    })}
                    
                </Cards>
                <NewsButton >Show More</NewsButton>
            </NewsSection>

            <Team>
                <TeamHeader>
                    <h1>Meet The Team</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </TeamHeader>
                <TeamCards>
                    {team.map(({id, image, name, title }) => {
                        return (
                            <TeamCard key={id}>
                              
                                <img src={image} alt="" />
                                <h3>{name}</h3>
                                <p>{title}</p>
                            </TeamCard>
                        )
                    })}
                    
                </TeamCards>
            </Team>

            <Contact>
                <ContactHeader>Get in touch</ContactHeader>
                <h1>Would You Like To Speak With Our Press Team</h1>
                <h1>press@streetrates.com</h1>
            </Contact>
        </Container>
    </>
  )
}

export default PressRelease
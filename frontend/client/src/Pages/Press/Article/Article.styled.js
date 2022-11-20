import styled from "styled-components";

export const Container = styled.div`
width: 1440px;
max-width: 100%;
padding: 0 2rem;
margin: 0 auto;

@media screen and (max-width: 480px) {
    width: 100%;
    padding: 0;
}


`

export const Date = styled.span`
padding-top: 7rem;

@media screen and (max-width: 1024px) {
    padding-left: 5rem;
}

@media screen and (max-width: 480px) {
    padding-left: 1rem ;
    font-size:.5rem;
}
`

export const Header = styled.div`
font-size: 3rem;
font-weight: 600;
color: #00296B;
padding: 3.5rem 13rem;

@media screen and (max-width: 1024px) {
    font-size: 2rem;
    padding: 2.5rem 8rem;
}

@media screen and (max-width: 480px) {
    font-size: 2rem;
    padding: .5rem 1rem;
}

`

export const Articles = styled.div`
font-size: 1.5rem;
padding: 0 222px;
display: flex;
flex-direction: column;
gap: 2rem;

@media screen and (max-width: 1024px) {
    font-size: 1rem;
    padding: 2.5rem 8rem;
}

@media screen and (max-width: 480px) {
    font-size: 1rem;
    padding: .5rem 1rem;
}

`

export const ArticlesSub = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;

ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
`

export const BottomText = styled.p`
font-style: italic;
`

export const Button = styled.button`

background: ${({primary}) =>(primary ? "#0062FF" : "#ffffff" )};
color: ${({primary}) =>(primary ? "#ffffff" : "#0062FF" )};

padding: 16px 20px;
gap: 8px;
font-size:1rem ;
/* background-color: #0062FF; */
/* color: #fff; */
border: 1px solid #0062FF;
border-radius: 4px;
width: 142px;
height: max-content;

display: flex;
align-items: center;
justify-content: center;
`

export const Buttons = styled.div`
display: flex;
gap: 2rem;
align-items: center;



`

//  Button
export const SocialLinks = styled.div`
display: flex;
justify-content: space-between;
padding: 64px 0;


@media screen and (max-width: 1024px) {
    font-size: 1rem;

}

@media screen and (max-width: 480px) {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
`

export const SocialIcons = styled.div`
display: flex;
gap: 1.5rem;
align-items: center;


`



export const SocialIconLink = styled.a`
color: #334155;
font-size: 1.5rem;

`

export const Contact = styled.div`
border: 1px solid #E2E8F0;
padding: 64px 305px;
h1 {
margin-bottom: 1rem;
}

text-align: center;

@media screen and (max-width: 1024px) {
    font-size: 1rem;
    padding: 2.5rem 8rem;
}

@media screen and (max-width: 480px) {
    font-size: 1rem;
    padding: .5rem 1rem;
}
`
export const ContactHeader = styled.p`
font-weight: 400;
font-size: 20px;
line-height: 28px;
text-align: center;
margin-bottom: 12px;

@media screen and (max-width: 1024px) {
    font-size: 1rem;
    padding: 2.5rem 8rem;
}

@media screen and (max-width: 480px) {
    font-size: 1rem;
    padding: .5rem 1rem;
}
`

// export const Date = styled.div``
// export const Date = styled.div``
// export const Date = styled.div``
// export const Date = styled.div``
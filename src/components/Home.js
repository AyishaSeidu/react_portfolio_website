import React from 'react'
import styled from '@emotion/styled';
//import {PageContainer} from './Styles'
import {Linkedin, GitHub, Mail} from 'react-feather'

function Home() {
    return (
        <Container>

            <Introduction>
            <Name>Ayisha Seidu</Name>
            <IntroText>A Ghanaian frontend developer with specialisation in react js</IntroText>
            </Introduction>
           
            <Photo src='Ayi.png'/>
        <HomeFooter>
            <ContactLink href='https://www.linkedin.com/in/ayishetu-seidu-70431392/'>
            <Linkedin/> <br/>
            LinkedIn
            </ContactLink>
           
            <ContactLink href='https://github.com/AyishaSeidu'>
            <GitHub/><br/>
            Github
            </ContactLink>
            <ContactLink>
            <Mail/> <br/>
            Contact
            </ContactLink>
        </HomeFooter>

        </Container>
    )
}

export default Home;

const Container = styled.div`
grid-area: content;
display: grid;
grid-template-column: repeat(2, 1fr);
grid-template-row: 1fr 10rem;
grid-template-areas: 
'intro photo'
'footer footer';
background-color: white;
border-radius: 0 0 50% 0;

`;

const Introduction = styled.div`
grid-area: intro;
width: 50vw;
font-size: 1rem;
align-content: centre;
`;

const Name = styled.div`
font-size: 7rem;
font-weight: bold;
padding: 1rem;
color: crimson;
text-shadow: 0.2rem 0.2rem black;
`;

const IntroText = styled.div`

`;

const Photo = styled.img`
grid-area: photo;
width: auto;
height: 80%;
`;


const HomeFooter = styled.div`
grid-area: footer;
display: flex;
flex-direction: row;
margin: auto;
bottom: 0;
padding: auto;
width: 100vw;
justify-content: space-around;
`;

const ContactLink = styled.a`
display: block;
cursor: pointer;
color: black;
`;
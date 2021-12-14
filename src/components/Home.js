import React from 'react'
import styled from '@emotion/styled';
//import {PageContainer} from './Styles'
import {Linkedin, GitHub, Mail} from 'react-feather'

function Home() {
    return (
        <Container>

            <Introduction>
           <h1>Ayisha </h1>
           <h1>Seidu</h1>
            <p>I am  Ghanaian frontend developer with speacilisaion in react js</p>
            </Introduction>
           
            <Photo src='ayisha.jpg'/>
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
background-color: lightviolet;
`;

const Introduction = styled.div`
grid-area: intro;
width: 50vw;
font-size: 1rem;
align-content: centre;
`;

const Photo = styled.img`
grid-area: photo;
width: auto;
height: 20rem;
border-radius: 1rem;
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
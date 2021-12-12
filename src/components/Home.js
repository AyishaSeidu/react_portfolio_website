import React from 'react'
import styled from '@emotion/styled';
import {PageContainer} from './Styles'
import {Linkedin, GitHub, Mail} from 'react-feather'

function Home() {
    return (
        <PageContainer>
            <About>
            <Introduction>Hello, my name is Ayisha, a frontend developer with speacilisaion in reacct js</Introduction>
           
            <Photo src='ayisha.jpg'/>
            </About>

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

        </PageContainer>
    )
}

export default Home

const Photo = styled.img`
width: auto;
height: 20rem;
border-radius: 1rem;
`;

const Introduction = styled.div``;

const About = styled.div`
display: flex;
flex-direction: row;
justify content: space-around;
`;

const HomeFooter = styled.div`
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
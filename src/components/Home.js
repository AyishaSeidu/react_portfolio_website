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
            <span>
            <Linkedin/>
            LinkedIn
            </span>
           
            <span>
            <GitHub/>
            Github
            </span>
            <span>
            <Mail/>
            Contact
            </span>
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
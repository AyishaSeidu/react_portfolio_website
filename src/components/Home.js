import React from 'react'
import styled from '@emotion/styled';
import {PageContainer} from './Styles'

function Home() {
    return (
        <PageContainer>
            <About>
            <Introduction>Hello, my name is Ayisha, a frontend developer with speacilisaion in reacct js</Introduction>
           
            <Photo src='ayisha.jpg'/>
            </About>
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
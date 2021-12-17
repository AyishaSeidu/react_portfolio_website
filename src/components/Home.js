import React from 'react'
import styled from '@emotion/styled';
//import {PageContainer} from './Styles'

function Home() {
    return (
        <Container>

            <Introduction>
            <Name>Ayisha Seidu</Name>
            <IntroText>A Ghanaian frontend developer with specialisation in react js</IntroText>
            </Introduction>
           
            <Photo src='Ayi.png'/>


        </Container>
    )
}

export default Home;

const Container = styled.div`
display: flex;
flex-direction: row;
background-color: white;
`;

const Introduction = styled.div`
width: 50vw;
font-size: 1rem;
align-content: centre;
`;

const Name = styled.div`
font-size: 5rem;
font-weight: bold;
padding: 1rem;
color: crimson;
text-shadow: 0.2rem 0.2rem black;
`;

const IntroText = styled.div`

`;

const Photo = styled.img`
width: auto;
height: 80%;
`;



import React from 'react'
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
//import {PageContainer} from './Styles'

function Home() {
    return (
        <Container>

            <Introduction>
            <Name>Ayisha Seidu</Name>
            <div>A Ghanaian frontend developer with specialisation in react js</div>
            </Introduction>

           <PhotoContainer />
           {/* <Photo src='Ayi.png'/> */}
           {/* </PhotoContainer> */}
            


        </Container>
    )
}

export default Home;

const Container = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 600px) {
    flex-direction: column;
}
background-color: white;
background-color: lightseagreen;
height: 100vh;
width: 100vw;
`;

const PhotoAnimation = keyframes`
0% {
    margin-right: -25rem;
}

25% {
    margin-right: 0rem;
}

100% {
    margin-right: auto;
}
`;

const IntroductionAnitation = keyframes`
0% {
    margin-left: -25rem;
}

25% {
    margin-left: 0rem;
}

100% {
    margin-left: none;
}
`;

const Introduction = styled.div`
width: 50vw;
font-size: 1rem;
align-content: center;
animation: ${IntroductionAnitation} 5s ease-in;
`;

const Name = styled.div`
font-size: 5rem;
font-weight: bold;
padding: 1rem;
color: tomato;
text-shadow: 0.2rem 0.2rem black;
@media (max-width: 800px) {
    font-size: 3rem;
}
`;

const PhotoContainer = styled.div`
margin: auto;
align-self: right;
height: 100%;
width: 50%;
background-image: url("Ayi.png");
background-repeat: no-repeat;
background-size: contain;
backgound-position: center;

@media (max-width: 800px) {
    height: 70vh;
    width: 100vw;
    bottom: 1rem;
}

animation: ${PhotoAnimation} 5s ease-in;
`;





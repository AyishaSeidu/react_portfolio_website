import styled from '@emotion/styled';
import React from 'react'

function Skills({skills}) {
    return (
        
        <Container>
            <Head>Languages, Libraries and Tools I have worked with</Head>
            <SKillsContainer>
            {skills.map((skill)=> {
                return <Skill imageURL={`${skill}.png`}/>
            })}
            </SKillsContainer>
            
        </Container>
    )
}

export default Skills

const Container = styled.div`
grid-area: content;
height: 100%;
width: 100%;
background-color: white;
`;

const SKillsContainer = styled.div`
margin: auto;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-content: center;
`;

const Skill = styled.div`
height: 10rem;
width: 10rem;
background-image: ${({imageURL})=> `url(${imageURL})`};
background-repeat: no-repeat;
background-position: center;
bacground-size: contain;
border-radius: 1rem;
padding: 1rem;
margin: 0.5rem auto;
`;

const Head = styled.div`
display: block;
font-size: 1rem;
margin: 1rem;

`;

import styled from '@emotion/styled';
import React from 'react'

function Skills({skills}) {
    return (
        
        <Container>
            
            
            {skills.map((skill)=> {
                return <Skill src={`${skill}.png`}/>
            })}
            
        </Container>
    )
}

export default Skills

const Container = styled.div`
grid-area: content;
display: flex;
flex-direction: row;
height: 100%;
width: 100%;
background-color: white;
`;

const Skill = styled.img`
//width: 10rem;
height: 10rem;
margin: auto;
border-radius: 1rem;
`;

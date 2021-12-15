import styled from '@emotion/styled'
import React from 'react'

function Projects({projects}) {
    return (
        <Container>
            There are some projects I have built
            {projects.map((project)=> {
                return (
                    <Project key={project.id}>
                        <div>
                        <ProjectName>{project.name}</ProjectName>
                        <Description>{project.description}</Description>
                        <ProjectLink href={project.link} target='_blank'>Learn More</ProjectLink>
                        </div>
                        <Image src={`${project.image}.png`} />

                    </Project>
                )
            })}
        </Container>
    )
}

export default Projects

const Container = styled.div`
grid-area: content;
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
background-color: white;
`

const Project = styled.div`
display: inherit;
flex-direction: row;
@media (max-width: 600px) {
    flex-direction: column;
}
justify-content: space-around;
align-items: center;
border-top: 0.05rem solid black;
:first-of-type{
    border: none;
  }
// border-radius: 1rem;
margin: 1rem auto;
height: 70%;
width: 80%;
`;



const Image = styled.img`
width: 30rem;
margin: 1rem;
`;

const ProjectName = styled.div`
padding: 0.2rem;
color: crimson;
font-size: 2rem;
font-weight: bold;
`;

const Description = styled.div`
width: 20rem;;
`

const ProjectLink = styled.a``
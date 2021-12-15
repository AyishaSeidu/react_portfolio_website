import styled from '@emotion/styled'
import React from 'react'

function Projects({projects}) {
    return (
        <Container>
            These are some projects I have built
            {projects.map((project)=> {
                return (
                    <Project key={project.id}>
                        <div>
                        <ProjectName>{project.name}</ProjectName>
                        <Description>{project.description}</Description>
                        <ProjectLink href={project.link} target='_blank'>See Live Version</ProjectLink>
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
gap: 0.5rem;
@media (max-width: 600px) {
    flex-direction: column;
}
justify-content: space-around;
align-items: center;
margin: auto;
height: 70%;
width: 80%;
`;



const Image = styled.img`
width: 30rem;
margin: 1rem;
@media (max-width: 600px) {
    width: 20rem;
}
border-radius: 2rem;
`;

const ProjectName = styled.div`
padding: 0.2rem;
color: crimson;
font-size: 2rem;
font-weight: bold;
`;

const Description = styled.div`
max-width: 20rem;
font-style:italic;
color: grey;
`

const ProjectLink = styled.a`
display: block;
text-decoration: none;
background-color: rgba(220,20,60, 0.8);
:hover {
    background-color: crimson;
}
color: white;
border-radius: 1rem;
padding: .5rem;
margin: .5rem auto;
width: 10rem;
cursor: pointer;
`
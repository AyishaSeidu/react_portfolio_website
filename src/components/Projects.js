import styled from '@emotion/styled'
import React from 'react'

function Projects({projects}) {
    return (
        <Container>
           <PageDescription >These are some projects I have built</PageDescription> 
            {projects.map((project)=> {
                return (
                    <Project key={project.id}>
                        <div style={{gridArea: "projectDescription"}}>
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
display: flex;
flex-direction: column;
//height: 100%;
width: 100%;
background-color: white;
margin: 1rem;
`
const PageDescription = styled.div`
margin: 1rem auto;
`;


const Project = styled.div`
display: grid;
grid-gap: 0.5rem;
grid-template-columns: 1fr 1fr;
grid-template-areas: 'projectDescription projectImage';

:nth-child(odd) {
    grid-template-areas: 'projectImage projectDescription';
}

@media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
justify-content: space-around;
align-items: center;
margin: auto;
height: 70%;
width: 80%;
`;

const Image = styled.img`
grid-area: projectImage;
width: 30rem;
margin: 1rem;
@media (max-width: 600px) {
    width: 20rem;
}
border-radius: 2rem;
`;

const ProjectName = styled.div`
padding: 0.2rem;
color: rgb(255, 99, 71);
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
//rgb for lightseagreen to be bale to set opacity
background-color: rgba(37,175,161, 0.8);
:hover {
    background-color: lightseagreen;
}
color: white;
border-radius: 1rem;
padding: .5rem;
margin: .5rem auto;
width: 10rem;
cursor: pointer;
`
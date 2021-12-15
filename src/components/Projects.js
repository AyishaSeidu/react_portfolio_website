import styled from '@emotion/styled'
import React from 'react'

function Projects({projects}) {
    return (
        <Container>
            Projects
            {projects.map((project)=> {
                return (
                    <Project key={project.id}>
                        <Image src={`${project.image}.png`} />
                        <ProjectName>{project.name}</ProjectName>
                        <Description>{project.description}</Description>
                        <ProjectLink href={project.link} target='_blank'>Learn More</ProjectLink>

                    </Project>
                )
            })}
        </Container>
    )
}

export default Projects

const Container = styled.div`
grid-area: content;
display: grid;
height: 100%;
width: 100%;
background-color: white;
`

const Project = styled.div``;

const Image = styled.img``;

const ProjectName = styled.div``;

const Description = styled.div``

const ProjectLink = styled.a``
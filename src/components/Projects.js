import React, {useEffect} from 'react'
import styled from '@emotion/styled';
import AOS from 'aos';
import "aos/dist/aos.css"


function Projects({projects}) {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])

    return (
        <Container>
           <PageDescription >My Projects</PageDescription> 
            {projects.map((project)=> {
                return (
                    <Project key={project.id}>
                        <div style={{gridArea: "projectDescription"}}>
                        <ProjectName>{project.name}</ProjectName>
                        <Description>{project.description}</Description>
                        <ProjectLink href={project.link} target='_blank'>See Live Version</ProjectLink>
                        </div>
                        <Image source={`${project.image}.png`} data-aos="fade-up" data-aos-once="true" />

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
min-height: 100vh;
width: 100%;
background-color: white;
margin: auto;
`
const PageDescription = styled.div`
margin: 1rem auto;
font-size: 1.5rem;
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
// justify-content: space-around;
align-items: center;
margin: auto;
height: 70%;
width: 80%;
`;

const Image = styled.div`
grid-area: projectImage;
width: 20rem;
height: 15rem;
margin: auto;
background-image: url(${({source})=>source});
background-repeat: no-repeat;
background-position: center;
background-size: contain;
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
margin: auto;
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
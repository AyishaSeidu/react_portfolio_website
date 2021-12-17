import React from "react";
import styled from "@emotion/styled";
import {Linkedin, GitHub, Mail} from 'react-feather'
import Home, {} from './Home'
import Projects from "./Projects";



function Site() {

  const projects = [{id: 0, name: 'Dashboard App', description: 'A React dashboard built with data from the JSONPlacehoder API', link: 'https://reverent-raman-1baaf8.netlify.app/', image: 'dashboard'} ,{id: 1, name: 'Todo App', description: 'Using react to built a single paged todo app', link: 'https://wonderful-brattain-c2056e.netlify.app/', image: 'todo'}];

  return (
    <PageWrapper >
      <div style={{gridArea: "content"}}>
      <Home/>
      <Projects projects={projects}/>
      </div>
      <>
      <Footer>
        <Linkedin/>
        <GitHub/>
        <Mail/>
      </Footer>
      </>
    </PageWrapper>
  );

}

export default Site;


const PageWrapper = styled.div`
display: grid;
grid-template-rows: 1fr 10rem;
grid-template-areas: 
'content'
'footer';
font-size: 1rem;
width: 100vw;
background-color: white;
overflow-x: auto;
`;

const Footer = styled.div`
grid-area: footer;
display: flex;
flex-direction: row;
margin: auto;
background-color: crimson;
padding: auto;
width: 100vw;
height: 100%;
justify-content: space-around;
`;


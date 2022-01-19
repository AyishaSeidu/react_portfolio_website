import React from "react";
import styled from "@emotion/styled";
import {Linkedin, GitHub, Mail} from 'react-feather'
import Home, {} from './Home'
import Projects from "./Projects";



function Site() {

  const projects = [{id: 0, name: 'Portfolio Website', description: 'A personal portfolio website built with react', link: 'https://objective-wilson-e1fd49.netlify.app/', image: 'portfolio'}, {id: 1, name: 'Dashboard App', description: 'A React dashboard built with data from the JSONPlacehoder API', link: 'https://reverent-raman-1baaf8.netlify.app/', image: 'dashboard'} ,{id: 1, name: 'Todo App', description: 'A single paged todo app with react', link: 'https://wonderful-brattain-c2056e.netlify.app/', image: 'todo'}];

  return (
    <PageWrapper >
      <div style={{gridArea: "content"}}>
      <Home/>
      <Projects projects={projects}/>
      </div>
      <>
      <Footer>
       <FooterItem href="https://www.linkedin.com/in/ayishetu-seidu-70431392/" target="__blank"> <Linkedin size={30}/> </FooterItem> 
       <FooterItem href="https://github.com/AyishaSeidu" target="__blank"> <GitHub size={30} /> </FooterItem>
       <FooterItem href="mailto:ayishetuseidu13@gmail.com"> <Mail size={30}/> </FooterItem>
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
background-image: url("wave.svg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
padding: auto;
width: 100vw;
height: 100%;
justify-content: space-around;
align-items: flex-end;
`;

const FooterItem = styled.a`
cursor: pointer;
color: black;
margin: auto;
padding: 0.2rem;
:hover {
  color: tomato;
}
`;

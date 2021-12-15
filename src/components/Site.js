import React from "react";
import styled from "@emotion/styled";
import Nav from "./Nav";
import Home, {} from './Home'
import Projects from "./Projects";


function Site() {

  const projects = [{id: 0, name: 'Dashboard App', description: 'A React dashboard built with data from the JSONPlacehoder API', link: 'https://reverent-raman-1baaf8.netlify.app/', image: 'dashboard'} ,{id: 1, name: 'Todo App', description: 'Using react to built a single paged todo app', link: 'https://wonderful-brattain-c2056e.netlify.app/', image: 'todo'}]

  return (
    <PageWrapper >
      <Nav/>
      {/* <Home/> */}
      <Projects projects={projects}/>
    </PageWrapper>
  );

}

export default Site;


const PageWrapper = styled.div`
display: grid;
grid-template-rows: 3rem 1fr;
grid-gap: 1rem;
grid-template-areas: 
'nav'
'content'
;
font-size: 1rem;
height: 100vh;
width: 100vw;
background-color: white;
overflow-x: auto;
`;
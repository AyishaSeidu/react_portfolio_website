import React from "react";
import styled from "@emotion/styled";
import Nav from "./Nav";


function Site() {

  return (
    <PageWrapper >
      <Nav/>
      <p style={{gridArea: 'content'}}>Welcome to Ayisha's world </p>
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
`;
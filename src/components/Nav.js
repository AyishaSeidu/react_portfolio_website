import React from 'react';
import styled from '@emotion/styled';

function Nav() {
    return (
        <NavPane>
            <NavList>
                <NavItem>HOME</NavItem>
                <NavItem>PROJECTS</NavItem>
                <NavItem>SKILLS</NavItem>
                <NavItem>CONTACT</NavItem>
            </NavList>
        </NavPane>
    )
}

export default Nav;

const NavPane = styled.nav`
width:100vw;
grid-area: nav;
margin: 0;
color: palevioletred;
@media (min-width: 600px) {
    margin: auto;
    width: 70%;
}
`;

const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-around;
`;

const NavItem = styled.li`
cursor: pointer;
padding: 0.3rem;
border-radius: 0.5rem;
font-weight: bold;
:hover {
    color: white;
    background-color: palevioletred;
}
`;
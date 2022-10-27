import React from 'react';
import HoverLink from '../../shared/HoverLink/HoverLink';
import {Container,Navbar,Logo,Navigations} from './navbarStyles';

const Nav = () => {
  return (
    <>
    <Container>
        <Navbar>
           <Logo src='./img/logo.png'/>
           <Navigations>
              <li><HoverLink path={"/"}>Home</HoverLink></li>
              <li><HoverLink path={"about"}>About</HoverLink></li>
              <li><HoverLink path={"services"}>Services</HoverLink></li>
              <li><HoverLink path={"projects"}>Our Projects</HoverLink></li>
              <li><HoverLink path={"contact"} isButton={true}>Contact Us</HoverLink></li>
           </Navigations>
        </Navbar>
      </Container>
    </>
  )
}

export default Nav
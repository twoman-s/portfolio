import React from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  Burger,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavElements";
import { CgMenuRight } from "react-icons/cg";

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            <h3>Alex</h3>
          </NavLogo>
          <Burger onClick={toggle}>
            <CgMenuRight />
          </Burger>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;

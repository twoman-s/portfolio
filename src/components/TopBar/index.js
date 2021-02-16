import React from "react";
import {
  TopBarContiner,
  Icon,
  CloseIcon,
  TopBarLinks,
  TopBarWrapper,
  TopBarMenu,
} from "./TopElements";

const TopBar = ({ isOpen, toggle }) => {
  return (
    <TopBarContiner isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <TopBarWrapper>
        <TopBarMenu>
          <TopBarLinks to="about" onClick={toggle}>
            About
          </TopBarLinks>
          <TopBarLinks to="services" onClick={toggle}>
            Services
          </TopBarLinks>
          <TopBarLinks to="projects" onClick={toggle}>
            Projects
          </TopBarLinks>
          <TopBarLinks to="contact" onClick={toggle}>
            Contact
          </TopBarLinks>
        </TopBarMenu>
      </TopBarWrapper>
    </TopBarContiner>
  );
};

export default TopBar;

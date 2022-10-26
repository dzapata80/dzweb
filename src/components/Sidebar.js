import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 75px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

class SideNav extends React.Component {
  render() {
    return (
      <StyledSideNav />
    );
  }
}

export default class Sidebar extends React.Component {
  render() {
    return (
      <SideNav>

      </SideNav>
    );
  }
}

class NavItem extends React.Component {
  render() {
    const { active } = this.props;
    return (
      <StyledNavItem active={active}>
        <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
          <NavIcon></NavIcon>
        </Link>
      </StyledNavItem>
    );
  }
}
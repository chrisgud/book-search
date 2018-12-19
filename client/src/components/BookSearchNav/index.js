import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const navItemStyle = {
  marginLeft: 20
}

function BookSearchNav() {
  return (
    <div>
      <Navbar color='light' light expand='md' style={{paddingTop: 20, paddingBottom: 20}}>
        <NavbarBrand href="/">Google Books</NavbarBrand>
        <Nav navbar>
          <NavItem style={navItemStyle}>
            <NavLink href="/search/">Search</NavLink>
          </NavItem>
          <NavItem style={navItemStyle}>
            <NavLink href="/saved/">Saved</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default BookSearchNav;

import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   } from 'reactstrap';
// import logo from '../static/images/favicon.png';

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <div className="container">
       <Navbar className="nav-fill w-100 header-nav" light expand="md" style={{fontSize:'1.4rem', padding: '20px 0'}}>
          <NavbarBrand href="/" style={{fontFamily: 'Trebuchet MS', fontSize:'2.2rem', fontWeight: 'bolder', color: '#28b485'}}> Tekulcha </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="pl-3">
                <NavLink href="/solutions">Solutions</NavLink>
              </NavItem>
              <NavItem className="pl-3">
                <NavLink href="/company">Company</NavLink>
              </NavItem>
              <NavItem className="pl-3">
                <NavLink href="/talent">Talent</NavLink>
              </NavItem>
              <NavItem className="pl-3">
                <NavLink href="/faq">Faq</NavLink>
              </NavItem>
              <NavItem className="pl-3">
                <NavLink href="/contact-us">Contact</NavLink>
              </NavItem>
              </Nav>
           </Collapse>
          </Navbar>
        </div>
    );
  }
}
import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "gatsby";
import styles from './header.scss';
import logo from '../images/logo2.png';


export default function Header() {
  return <header>
    <Navbar collapseOnSelect expand='lg' id='navbar'>
        <Navbar.Brand href='/'>
          <img src={logo} alt="DMC logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler navbar-toggler-right" aria-controls="responsive-navbar-nav">Menu</Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav' className='collapse navbar-collapse'>
          <Nav>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/programs' className='nav-link'>Programs</Link>
            <Link to='/events' className='nav-link'>Events</Link>
            <Link to='/donate' className='nav-link'>Donate</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </header>;
}


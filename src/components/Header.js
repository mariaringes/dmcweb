import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from "gatsby";
import styles from './header.scss';
import logo from '../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return <header>
    <Navbar collapseOnSelect expand='lg' id='navbar'>
        <Navbar.Brand href='/'>
          <img src={logo} alt="DMC logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler navbar-toggler-right" aria-controls="responsive-navbar-nav">
          <FontAwesomeIcon icon={faBars} size="1x">Menu</FontAwesomeIcon>
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav' className='collapse navbar-collapse'>
          <Nav>
            <div class="dropdown">
              <Link to='/about' className='dropbtn'>About</Link>
              <div class="dropdown-content">
                <a href="/about#wwa">Who We Are</a>
                <a href="/about#ourmission">Our Mission</a>
                <a href="/about#ourstaff">Our Staff</a>
              </div>
            </div>
            <div class="dropdown">
              <Link to='/programs' className='dropbtn'>Programs</Link>
              <div class="dropdown-content">
                <a href="/programs/danbury-symphony-orchestra">Danbury Symphony Orchestra</a>
                <a href="/programs/danbury-concert-chorus">Danbury Concert Chorus</a>
                <a href="/programs/danbury-community-orchestra">Danbury Community Orchestra</a>
                <a href="/programs/danbury-centre-strings">Danbury Centre Strings</a>
                <a href="/programs/danbury-community-band">Danbury Community Band</a>
                <a href="/programs/dmc-ambassadors">DMC Ambassadors</a>
                <a href="/programs/nutcracker">Nutcracker</a>
                <a href="/programs/summer-enrichment-programs">Summer Enrichment Programs</a>
              </div>
            </div>
            <div class="dropdown">
              <Link to='/events' className='dropbtn'>Events</Link>
              <div class="dropdown-content">
                <a href="/events/5k">Annual 5K</a>
                <a href="/events/dcbcbf">Danbury Community Band: Concert Band Favorites</a>
                <a href="/events/gala">Gala</a>
              </div>
            </div>
            <div class="dropdown">
              <Link to='/sponsors' className='dropbtn'>Sponsors</Link>
              <div class="dropdown-content">
                <a href="/sponsors">Our Sponsors</a>
                <a href="/sponsors#bas">Become a Sponsor</a>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
        <Button id='headerdonatebutton' variant="light"><Link to='/donate'>Donate</Link></Button>
    </Navbar>
  </header>;
}


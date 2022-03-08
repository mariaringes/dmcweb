import React from "react";
import { Container, Stack } from 'react-bootstrap';
import { Link } from 'gatsby';
import styles from './footer.scss';
import logo from '../images/logo2.png';
import twitterlogo from '../images/contactlogos/twitter.png';
import instagramlogo from '../images/contactlogos/instagram.png';
import facebooklogo from '../images/contactlogos/facebook.png';

export default function Footer() {
  return <footer>
    <Container>
      <Stack direction='horizontal' gap={4}>
        <img src={logo} alt='DMC Logo' id='imgvertical'></img>
        <Stack direction='vertical' id='aboutvertical'>
          <Link to='/about' className='title'>About</Link>
          <Link to='/about#intro' className='subtitle'>Introduction</Link>
          <Link to='/about#mission' className='subtitle'>Our Mission</Link>
          <Link to='/about#staff' className='subtitle'>Our Staff</Link>
        </Stack>
        <Stack direction='vertical' id='programsvertical'>
          <Link to='/programs' className='title'>Programs</Link>
          <Link to='/programs' className='subtitle'>Danbury Symphony Orchestra</Link>
          <Link to='/programs' className='subtitle'>Danbury Concert Chorus</Link>
          <Link to='/programs' className='subtitle'>Danbury Community Orchestra</Link>
          <Link to='/programs' className='subtitle'>Danbury Centre Strings</Link>
          <Link to='/programs' className='subtitle'>Danbury Community Band</Link>
          <Link to='/programs' className='subtitle'>DMC Ambassadors</Link>
          <Link to='/programs' className='subtitle'>Nutcracker</Link>
          <Link to='/programs' className='subtitle'>Summer Enrichment Programs</Link>
        </Stack>
        <Stack direction='vertical' id='eventsvertical'>
          <Link to='/donate' className='title'>Events</Link>
          <Link to='/donate' className='subtitle'>Recent</Link>
        </Stack>
        <Stack direction='vertical' id='donatevertical'>
          <Link to='/donate' className='title'>Donate</Link>
          <Link to='/donate' className='subtitle'>Become a Sponsor</Link>
          <Link to='/donate' className='subtitle'>Become a Member</Link>
          <Link to='/donate' className='subtitle'>Donate</Link>
        </Stack>
        <Stack direction='vertical' id='contactusvertical'>
          <Link to='/donate' className='title'>Contact Us</Link>
          <Stack direction='horizontal' id='contactushorizontal'>
            <Link to='https://www.facebook.com/DanburyMusicCentre/' className='contactlogo' id='facebooklogo'>
              <img src={facebooklogo}/>
            </Link>
            <Link to='https://www.instagram.com/danburymusiccentre/' className='contactlogo' id='instagramlogo'>
              <img src={instagramlogo}/>
            </Link>
            <Link to='https://twitter.com/danbmusiccentre?lang=en' className='contactlogo' id='twitterlogo'>
              <img src={twitterlogo}/>
            </Link>
          </Stack>
          <p id='location'>256 Main Street</p>
          <p>Danbury, CT 06810</p>
          <p>Phone: 203.748.1716</p>
          <p id='hours'>Hours</p>
          <p>By Appointment Only</p>
          <p>Monday – Thursday: 9:00am to 5:00pm</p>
          <p>Friday: Closed</p>
        </Stack>
      </Stack>
    </Container>
  </footer>;
}

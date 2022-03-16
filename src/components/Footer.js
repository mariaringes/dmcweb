import React from "react";
import { Container, Stack } from 'react-bootstrap';
import { Link } from 'gatsby';
import styles from './footer.scss';
import logo from '../images/logo3.png';
import twitterlogo from '../images/contactlogos/twitter.png';
import instagramlogo from '../images/contactlogos/instagram.png';
import facebooklogo from '../images/contactlogos/facebook.png';

export default function Footer() {
  return <footer>
    <div className="m-auto mx-5">
      <Stack direction='horizontal' gap={4}>
        <img id='logo' src={ logo }/>
        <Stack direction='vertical' id='aboutvertical'>
          <Link to='/about' className='title'>About</Link>
          <Link to='/about#wwa' className='subtitle'>Who We Are</Link>
          <Link to='/about#ourmission' className='subtitle'>Our Mission</Link>
          <Link to='/about#ourstaff' className='subtitle'>Our Staff</Link>
        </Stack>
        <Stack direction='vertical' id='programsvertical'>
          <Link to='/programs' className='title'>Programs</Link>
          <Link to='/programs/dso' className='subtitle'>Danbury Symphony Orchestra</Link>
          <Link to='/programs/dcc' className='subtitle'>Danbury Concert Chorus</Link>
          <Link to='/programs/dco' className='subtitle'>Danbury Community Orchestra</Link>
          <Link to='/programs/dcs' className='subtitle'>Danbury Centre Strings</Link>
          <Link to='/programs/dcb' className='subtitle'>Danbury Community Band</Link>
          <Link to='/programs/dmca' className='subtitle'>DMC Ambassadors</Link>
          <Link to='/programs/nutc' className='subtitle'>Nutcracker</Link>
          <Link to='/programs/sep' className='subtitle'>Summer Enrichment Programs</Link>
        </Stack>
        <Stack direction='vertical' id='eventsvertical'>
          <Link to='/events' className='title'>Events</Link>
          <Link to='/events/5k' className='subtitle'>Annual 5K</Link>
          <Link to='/events/dcbcbf' className='subtitle'>Danbury Community Band: Concert Band Favorites</Link>
          <Link to='/events/gala' className='subtitle'>Gala</Link>
        </Stack>
        <Stack direction='vertical' id='donatevertical'>
          <Link to='/donate' className='title'>Donate</Link>
          <Link to='/donate#bas' className='subtitle'>Become a Sponsor</Link>
          <Link to='/donate#bam' className='subtitle'>Become a Member</Link>
          <Link to='/donate#mad' className='subtitle'>Make a Donation</Link>
        </Stack>
        <Stack direction='vertical' id='contactusvertical'>
          <Link to='/donate' className='title'>Contact Us</Link>
          <Stack direction='horizontal' id='contactushorizontal' className='subtitle'>
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
          <p id='location' class='subtitle'>256 Main Street</p>
          <p class='subtitle'>Danbury, CT 06810</p>
          <p class='subtitle'>Phone: 203.748.1716</p>
          <p id='hours' class='subtitle'>Hours</p>
          <p class='subtitle'>By Appointment Only</p>
          <p class='subtitle'>Mon-Thurs: 9-5pm</p>
          <p class='subtitle'>Friday: Closed</p>
        </Stack>
      </Stack>
      <p id='copyright'>Maria Ringes 2022©</p>
    </div>
  </footer>;
}

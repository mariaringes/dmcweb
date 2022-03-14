import * as React from 'react'
import { Container, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import styles from './index.scss';
import background from '../images/sheetmusic.jpg';

export default function IndexPage() {
  return <Layout>
    
    <div class='heroouter'>
      <div class='text'>
        <h1 class='display-3'>Danbury Music Centre</h1>
        <h4>Community Music Since 1935</h4>
        {/* <Button variant="outline-light">Donate</Button> */}
      </div>
    </div>

    <div id='missioncontainer'>
      <div id='mission'>
        <h1>Our Mission</h1>
        <h5>To sponsor musical organizations, both instrumental and vocal, in which persons of a wide variety of musical backgrounds are encouraged to study and perform classical and modern compositions to improve their musical ability and to share the joy of music with the people of the greater Danbury area.</h5>
      </div>
    </div>

    <Container>
      <div id='featuredpages'>
        <Link to='about' style={{ textDecoration: 'none' }}>
          <div class='wrapper'>
            <figure class="td-figure">
              <img id='aboutimg' class="block width-100%" src="https://danburymusiccentre.org/wp-content/uploads/2021/03/dmc-960x480-1.jpg"/>
            </figure>
            <h3 class='fptext'>About Us</h3>
          </div>
        </Link>

        <Link to='programs' style={{ textDecoration: 'none' }}>
          <div class='wrapper'>
            <figure class="td-figure">
              <img id='programsimg' class="block width-100%" src="https://danburymusiccentre.org/wp-content/uploads/2021/03/47723924312_c7114097b1_c.jpg" alt="Image description"/>
            </figure>
            <h3 class='fptext'>Programs</h3>
          </div>
        </Link>

        <Link to='events' style={{ textDecoration: 'none' }}>
          <div class='wrapper'>
            <figure class="td-figure">
              <img id='eventsimg' class="block width-100%" src="https://danburymusiccentre.org/wp-content/uploads/2019/05/Image-2.png" alt="Image description"/>
            </figure>
            <h3 class='fptext'>Events</h3>
          </div>
        </Link>
      </div>
    </Container>

    <div id='sponsorus'>
      <div class='colored' id='top'></div>
      <div id='content'>
        <div id='text'>
          <h2>Support the <br></br>Danbury Music Centre</h2>
          <p>Your donations help to continue our mission to <br></br>bring music to the greater Danbury Area!</p>
          <Button id='donatebtn' variant="light">Donate</Button>
        </div>
        <div class='colored' id='image'>
          <img src='https://danburymusiccentre.org/wp-content/uploads/2021/03/DMC-Nut-2019-Battle-Transformation-DSC-6264-scaled.jpg'></img>
        </div>
      </div>
      <div class='colored' id='bottom'></div>
    </div>

    
  </Layout>;
}

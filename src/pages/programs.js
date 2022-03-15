import * as React from 'react';
import { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "gatsby";
//Components
import Layout from '../components/Layout';
import Program from '../components/Program';
//Styles
import styles from './programs.scss';
//Images
import dso from '../images/orchestra.png';
import dcc from '../images/microphone.png';
import dco from '../images/classical-music.png';
import dcb from '../images/live-music.png';
import dcs from '../images/music.png';
import dmca from '../images/politician.png';
import nutc from '../images/nutcracker.png';
import sep from '../images/summer-beach.png';

export default function ProgramsPage() {
  return (
    <Layout>
      <div id='programsheader'>
        <div id='text'>
          <h2>Programs</h2>
          <h1>Danbury Music Centre</h1>
        </div>
      </div>

      <Container id='programs'>
        <h2>OUR PROGRAMS</h2>
        <h5>Click Icons to Learn More</h5>
        <Row xs={2} md={3} lg={4}>
            <Col><Program img={dso} short='dso' name={<Fragment>Danbury Symphony <br></br> Orchestra</Fragment>}></Program></Col>
            <Col><Program img={dcc} short='dcc' name={<Fragment>Danbury Concert <br></br> Chorus</Fragment>}></Program></Col>
            <Col><Program img={dco} short='dco' name={<Fragment>Danbury Community <br></br> Orchestra</Fragment>}></Program></Col>
            <Col><Program img={dcb} short='dcb' name={<Fragment>Danbury Community <br></br> Band</Fragment>}></Program></Col>
            <Col><Program img={dcs} short='dcs' name={<Fragment>Danbury Centre <br></br> Strings</Fragment>}></Program></Col>
            <Col><Program img={dmca} short='dmca' name={<Fragment>DMC <br></br> Ambassadors</Fragment>}></Program></Col>
            <Col><Program img={nutc} short='nutc' name='Nutcracker'></Program></Col>
            <Col><Program img={sep} short='sep' name={<Fragment>Summer Enrichment <br></br> Programs</Fragment>}></Program></Col>
          </Row>
      </Container>
    </Layout>
  );
}
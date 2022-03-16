import * as React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Layout from '../components/Layout';
//Components
import Event from '../components/Event';
//Styles
import styles from './events.scss';
//Image
import nutc from '../images/nutcracker.jpg';

export default function EventsPage() {
  return (
    <Layout>
      <div id='eventsheader'>
        <div id='text'>
          <h2>Events</h2>
          <h1>Danbury Music Centre</h1>
        </div>
      </div>

      <Container id='events'>
        <Row xs={2} md={3} lg={4}>
          <Col><Event img='https://danburymusiccentre.org/wp-content/uploads/2022/03/Flier-DMC-Virtual-5k-2022-1.jpeg' month='APR' day='23-30' title='Annual 5K'to='/events/5k'></Event></Col>
          <Col><Event img='https://danburymusiccentre.org/wp-content/uploads/2021/09/shutterstock_498575296-scaled.jpg' month='MAY' day='15' title='Danbury Community Band: Concert Band Favorites' to='/events/dcbcbf'></Event></Col>
          <Col><Event img='https://danburymusiccentre.org/wp-content/uploads/2021/09/A736CB01-1D09-084A-FD2EBD2F0AB7D0E4.jpeg' month='MAR' day='19' title='DMC Gala' to='/events/gala'></Event></Col>
        </Row>
      </Container>
    </Layout>
  );
}
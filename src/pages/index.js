import * as React from 'react'
import { Container, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Layout from '../components/Layout';
import styles from './index.scss';
import BackgroundImage from 'gatsby-background-image';
import background from '../images/sheetmusic.jpg';

export default function IndexPage() {
  return <Layout>
    <div class='outer'>
      <div class='img'><img src={background}></img></div>
      <div class='text'>
        <h1>Community Music Since 1935</h1>
        <Button variant="outline-light">Donate</Button>
      </div>
    </div>

    <div id='mission'>
      <h1>Our Mission</h1>
      <h5>To sponsor musical organizations, both instrumental and vocal, in which persons of a wide variety of musical backgrounds are encouraged to study and perform classical and modern compositions to improve their musical ability and to share the joy of music with the people of the greater Danbury area.</h5>
    </div>

    <Container>
      <div id='featuredpages'>
      <Card id='aboutus' style={{ width: '18rem' }}>
        <Card.Img class='image' variant="top" src="https://danburymusiccentre.org/wp-content/uploads/2021/03/dmc-960x480-1.jpg"/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card id='events' style={{ width: '18rem' }}>
        <Card.Img class='image' variant="top" src="https://danburymusiccentre.org/wp-content/uploads/2021/03/47723924312_c7114097b1_c.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card id='becomeamember' style={{ width: '18rem' }}>
        <Card.Img class='image' variant="top" src="https://danburymusiccentre.org/wp-content/uploads/2019/05/Image-2.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </Container>
  </Layout>;
}

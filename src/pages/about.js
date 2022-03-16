import * as React from 'react';
import { Fragment } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
//Components
import Layout from '../components/Layout';
import Staff from '../components/Staff';
//Styles
import styles from './about.scss';
//images
import mission from '../images/target.jpg';
import vision from '../images/vision.jpg';
import values from '../images/values.jpg';
import presentation from '../images/presentation.png';
import audience from '../images/audience.png';
import movies from '../images/movie.png';
import user from '../images/user.png';

export default function AboutPage() {
  return (
    <Layout>
      <div id='aboutusheader'>
        <div id='text'>
          <h2>About</h2>
          <h1>Danbury Music Centre</h1>
        </div>
      </div>

      <div id='wwa'>
        <h2 id='wwatitle'>WHO WE ARE</h2>
        <h5 id='wwatextcontent'>The Danbury Music Centre, is 501(c)(3), non-profit organization located at 256 Danbury Main Street housed in a beautiful 19th-century building, formerly the public library. <br></br>We provide classical community music experiences through our ensembles and events. In 1993, the Danbury Common Council dedicated the upstairs rehearsal hall in honor of the late Marian Anderson, a world-renowned contralto who was a resident of Danbury and served on the Music Centre Board of Directors.</h5>
      </div>

      <div class='category' id='ourmission'>
        <div class='text'>
          <h3>OUR MISSION</h3>
          <h6 class='textcontent'>To sponsor musical organizations, both instrumental and vocal, in which persons of a wide variety of musical backgrounds are encouraged to study and perform classical and modern compositions to improve their musical ability and to share the joy of music with the people of the greater Danbury area. <br></br><br></br> The musical organizations of the Danbury Music Centre will be composed of amateur and professional musicians from the greater Danbury area and will be conducted by professional directors. Most performances will be free to the public.</h6>
        </div>
        <div class='image'><img src={mission}></img></div>
      </div>

      <div class='category' id='vision'>
        <div class='image'><img src={vision}></img></div>
        <div class='text'>
          <h3>OUR VISION</h3>
          <h6 class='textcontent'>Enriching lives through music and performing arts by providing a nurturing, inclusive, and creative environment for a diverse community.</h6>
        </div>
      </div>

      <div class='category' id='values'>
        <div class='text'>
          <h3>OUR VALUES</h3>
          <h6 class='textcontent'>Education, Experience, Entertainment</h6>
          <div id='icons'>
            <img src={presentation}></img>
            <img src={audience}></img>
            <img src={movies}></img>
          </div>
        </div>
        <div class='image'><img src={values}></img></div>
      </div>

      <div id='ourstaff'>
        <h2 id='ourstafftitle'>OUR STAFF</h2>

        {/* <div id='quicklink'>
          <p>Quick Links</p>
          <div id='links'>
            <Button href='#musicaldirectors' variant='light'>Musical Directors</Button>
            <Button href='#boardofdirectors' variant='light'>Board of Directors</Button>
            <Button href='#governingboard' variant='light'>Governing Board</Button>
            <Button href='#honoraryboardmembers' variant='light'>Honorary Board Members</Button>
            <Button href='#advisoryboardmembers' variant='light'>Advisory Board Members</Button>
          </div>
        </div> */}

        <Container id='adminassistant'>
          <Staff name="Marian Bochnia" position="Administrative Assistant" email="marian@danburymusiccentre.org"></Staff>
        </Container>

        <Container id='musicaldirectors'>
          <h4 class='staffsectiontitle'>Musical Directors</h4>
          <Row xs={2} md={3} lg={4}>
            <Col><Staff img='https://danburymusiccentre.org/wp-content/uploads/2020/10/ArielRudiakov.jpg' name='Ariel Rudiakov' position='Danbury Symphony Orchestra' email=''></Staff></Col>
            <Col><Staff img='https://danburymusiccentre.org/wp-content/uploads/2020/10/Jason_Thoms-2017-683x1024-1.jpg' name='Jason Thoms' position='Danbury Concert Chorus' email=''></Staff></Col>
            <Col><Staff img='https://danburymusiccentre.org/wp-content/uploads/2020/10/Stephen_Michael_Smith_Conductor_900-682x1024-1.jpg' name='Stephen Michael Smith' position='Danbury Community Orchestra' email=''></Staff></Col>
            <Col><Staff img='https://danburymusiccentre.org/wp-content/uploads/2021/03/lebetkin.jpg' name='Glen Lebetkin' position='Danbury Centre Strings' email=''></Staff></Col>
            <Col><Staff img='https://danburymusiccentre.org/wp-content/uploads/2020/10/humphreville-300x216-1.jpg' name='James E. Humphreville' position={<Fragment>Music Director Emeritus, <br></br> Danbury Symphony Orchestra</Fragment>} email=''></Staff></Col>
            <Col><Staff img='https://danburymusiccentre.org/wp-content/uploads/2021/03/Richardprice.jpg' name='Richard Price' position={<Fragment>Music Director Emeritus, <br></br> Danbury Concert Chorus</Fragment>} email=''></Staff></Col>
            <Col><Staff img='https://danburymusiccentre.org/wp-content/uploads/2021/03/LDeming-July-2014.jpg' name='Larry Deming' position='Music Director Summer Strings' email=''></Staff></Col>
            <Col><Staff img='https://danburymusiccentre.org/wp-content/uploads/2020/10/AlbertMontecalvo-768x1024-1.jpg' name='Albert Montecalvo' position={<Fragment>Summer Bands, <br></br> DMC Ambassadors Band</Fragment>} email=''></Staff></Col>
          </Row>
        </Container>

        <Container id='boardofdirectors'>
          <h4 class='staffsectiontitle'>Board of Directors / Officers</h4>
          <Row xs={2} md={3} lg={4}>
            <Col><Staff img={user} name='Laura Flachbart' position='President'></Staff></Col>
            <Col><Staff img={user} name='Gina Corriero' position='Vice President'></Staff></Col>
            <Col><Staff img={user} name='Peg Heetmann' position='Treasurer'></Staff></Col>
            <Col><Staff img={user} name='Joan Howard' position='Secretary'></Staff></Col>
          </Row>
        </Container>

        <Container id='governingboard'>
          <h4 class='staffsectiontitle'>Governing Board</h4>
          <Row xs={3} md={4} lg={4}>
            <Col><Staff img={user} name='Michael Bank'></Staff></Col>
            <Col><Staff img={user} name='Marcie Gemza'></Staff></Col>
            <Col><Staff img={user} name='Alice Gottlieb'></Staff></Col>
            <Col><Staff img={user} name='Nancy Lunt'></Staff></Col>
            <Col><Staff img={user} name='Paul Matchen'></Staff></Col>
            <Col><Staff img={user} name='Dawn Ringes'></Staff></Col>
            <Col><Staff img={user} name='Karen Watko'></Staff></Col>
            <Col><Staff img={user} name='Kevin Webb'></Staff></Col>
          </Row>
        </Container>

        <Container id='honoraryboardmembers'>
          <h4 class='staffsectiontitle'>Honorary Board Members</h4>
          <Row xs={1} md={1} lg={1}>
            <Col><Staff img={user} name='Linda Poulin'></Staff></Col>
          </Row>
        </Container>

        <Container id='advisoryboardmembers'>
          <h4 class='staffsectiontitle'>Advisory Board Members</h4>
          <Row xs={2} md={2} lg={4}>
            <Col><Staff img={user} name={<Fragment>Former Mayor, <br></br> Mark Boughton</Fragment>}></Staff></Col>
            <Col><Staff img={user} name='Guy DePaul'></Staff></Col>
            <Col><Staff img={user} name='Brigid Guertin'></Staff></Col>
            <Col><Staff img={user} name='Beth Ann Fetzer'></Staff></Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

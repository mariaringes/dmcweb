import React from 'react';
import { Link } from "gatsby";
import { Container,Row,Col } from 'react-bootstrap';
import styles from './programdetail.scss';
//Custom Components
import Layout from '../components/Layout';
import Staff from '../components/Staff';
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faClockFour,
  faHomeAlt
} from '@fortawesome/free-solid-svg-icons';

export default function ProgramDetail (props) {
  console.log(props.concertdate);
  let concertExist = (typeof props.concertdate !== 'undefined');
  let rehearsalDateExist = (typeof props.rehearsaldate !== 'undefined');
  return (
    <div>
      <Container>
        <img id='programheader' src={props.img}></img>
        <div id='programdetails'>
          <h1 id='title'>{props.title}</h1>
          <h4 id='description'>{props.gendescription}</h4>
        </div>
        <div id='joinus'>
          <img id='joinusimg' src='https://danburymusiccentre.org/wp-content/uploads/2021/09/shutterstock_1385026928-scaled.jpg'></img>
          <div id='joinustxt'>
            <h2 id='title'>Interested in Joining?</h2>
            <h5>{props.joinustext}</h5>
          </div>
        </div>
        <div id='staff'>
          <h2>Our Staff</h2>
          <Row xs={props.staff.size/2} md={props.staff.size/2} lg={props.staff.size}>
            {props.staff.map(staffmember => <Col><Staff img={staffmember.img} name={staffmember.name} position={staffmember.position} /></Col>)} 
          </Row>
        </div>
        <div id='programtimedetails'>
          <div id='rehearsalschedule'>
            <h3>Rehearsal Schedule</h3>
            <FontAwesomeIcon icon={faCalendarAlt} size='1x'/> {props.rehearsaldate} <br></br>
            <FontAwesomeIcon icon={faClockFour} size="1x"/> {props.rehearsaltime} <br></br>
            <FontAwesomeIcon icon={faHomeAlt} size="1x"/> {props.rehearsallocation} <br></br>
          </div>
          {concertExist ? <div id='concertschedule'>
            <h3>Concert Schedule</h3>
            <FontAwesomeIcon icon={faCalendarAlt} size="1x"/> {props.concertdate} <br></br>
            <FontAwesomeIcon icon={faClockFour} size="1x"/> {props.concerttime} <br></br>
            <FontAwesomeIcon icon={faHomeAlt} size='1x'/> {props.concertlocation}
          </div> : null}
          
        </div>

      </Container>
      <Container>
        <div id='memberinformation'>
          <h2 id='title'>Membership Information</h2>
          <h4>Danbury Music Centre Membership at the {props.memberlevel} Level of ${props.memberlevelprice} is required.</h4>
          <h4>You may pay online below or by check mailed to Danbury Music Centre, 256 Main Street, Danbury, CT 06810. <br></br><br></br>If you have any questions, please call The Danbury Music Centre at 203-748-1716. </h4>
          <h4 id='memberlink'><Link to={props.linkinfo}>Become a Member</Link></h4>
        </div>
      </Container>
    </div>
  );
}

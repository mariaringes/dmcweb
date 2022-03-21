import React from 'react';
import { Link } from "gatsby";
import { Container, } from 'react-bootstrap';
import Layout from '../components/Layout';
import styles from './eventdetail.scss';
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faClockFour,
  faHomeAlt
} from '@fortawesome/free-solid-svg-icons';

export default function EventDetail (props) {
    if (props.location) {
        return (
              <Container id='event'>
                <div id='eventimg'>
                  <img src={props.img}></img>
                </div>
                <div id='eventtext'>
                  <h1>{props.title}</h1>
                  <h5>{props.subtitle}</h5>
                  <FontAwesomeIcon icon={faCalendarAlt} size="1x"/> {props.date}<br></br>
                  <FontAwesomeIcon icon={faClockFour} size="1x"/> {props.time}<br></br>
                  <FontAwesomeIcon icon={faHomeAlt} size="1x"/>{props.location}<br></br>
                  <p id='eventdescription'>
                    {props.eventDescription}
                  </p>
                </div>
              </Container>
          );
    } else{
        return (
              <Container id='event'>
                <div id='eventimg'>
                  <img src={props.img}></img>
                </div>
                <div id='eventtext'>
                  <h1>{props.title}</h1>
                  <h5>{props.subtitle}</h5>
                  <FontAwesomeIcon icon={faCalendarAlt} size="1x"/> {props.date}<br></br>
                  <FontAwesomeIcon icon={faClockFour} size="1x"/> {props.time}<br></br>
                  <p id='eventdescription'>
                    {props.eventDescription}
                  </p>
                </div>
              </Container>
          );
    }
}

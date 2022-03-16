import React from 'react';
import { Link } from "gatsby";
import { Container, } from 'react-bootstrap';
import styles from './eventdetail.scss';
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faClockFour,
  faHomeAlt
} from '@fortawesome/free-solid-svg-icons';

export default function ProgramDetail (props) {
  return (
    <Layout>
      <Container id='program'>
        <p>{props.title}</p>
        <p>{props.subtitle}</p>
      </Container>
    </Layout>
  );
}

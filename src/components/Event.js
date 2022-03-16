import React from 'react';
import { Link } from "gatsby";
import { Container, Card, Button } from 'react-bootstrap';
import styles from './event.scss';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
//images
import time from '../images/clock.png';

export default function Event (props) {
    return (
        <div id='eventCard'>
            <div id='cardhead'>
                {/* img={} month='Dec' day='10' title='Nutcracker' program='Nutcracker' time='8:00pm' */}
                <img src={props.img}/>
                <p id='date'>{props.month}<br></br>{props.day}</p>
            </div>
            <div id='cardbody'>
                <h6>{props.date}</h6>
                <h4>{props.title}</h4>
                <Button variant='light' href={props.to}>Learn More</Button>
            </div>
        </div>
    );
}
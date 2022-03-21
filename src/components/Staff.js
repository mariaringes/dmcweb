import React from 'react';
//Styles
import styles from './staff.scss';

export default function Staff (props) {
    const imageExists = props.img;
    if (imageExists){
        return (
            <div class='staff'>
                <img src={props.img} alt='staffimage'></img>
                <h6 className='name' style={{ margin: '15px 0 0 0',}}>{props.name}</h6>
                <p style={{ margin: '0',}}>{props.position}</p>
                <p>{props.email}</p>
            </div>
        );
    } else{
        return (
            <div class='staff'>
                <h6 className='name' style={{ margin: '0',}}>{props.name}</h6>
                <p style={{ margin: '0',}}>{props.position}</p>
                <p>{props.email}</p>
            </div>
        );
    }
    
    
}
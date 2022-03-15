import React from 'react';
import { Link } from "gatsby";

export default function Program (props) {
    const imageExists = props.img;
    if (imageExists){
        return (
            <div class='program'>
                <Link to={props.short}><img src={props.img} alt='programimage'></img></Link>
                <h3 className='name' style={{ margin: '15px 0 0 0',}}>{props.name}</h3>
            </div>
        );
    } else{
        return (
            <div class='program'>
                <h3 className='name' style={{ margin: '15px 0 0 0',}}>{props.name}</h3>
            </div>
        );
    }
    
    
}
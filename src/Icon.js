import React from 'react';
import './Icon.css';

function Icon (props){
    return(
        <a href={props.href}>
            <img src={`/assets/${props.img}`} alt={props.name} className="Icon-image"/>
        </a>    
    );
}

export default Icon;
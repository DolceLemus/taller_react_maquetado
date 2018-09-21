import React from 'react';
import image from './assets/image4.jpg';

import './Proyect.css';


function Proyect (props){
    return(
        <section className="Proyect-container">
            <div className="Proyect-text-container">
                <br/>
                <h1>Proyect</h1> 
                <hr/>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sociis senectus, pharetra interdum donec sed ligula cubilia mauris nec non, purus lobortis gravida aliquet fusce quisque parturient volutpat. Nulla magna suscipit orci pharetra taciti nisl suspendisse hendrerit et ligula duis, elementum id proin laoreet vestibulum praesent fusce dignissim neque ridiculus, sollicitudin ultricies at accumsan rhoncus cubilia interdum erat vel eleifend. Primis dignissim congue eros quis odio ullamcorper tortor, felis vitae dictum fusce sodales tincidunt, augue bibendum hendrerit per aptent mus.</p>               
            </div>
            <div className="Proyect-image-container">
                <img className="Proyect-image" src={image}/>
            </div>
        </section>
    );
}

export default Proyect;
// funcionalidad
import React from 'react';
// estilos
import './Aboutme.css';
//imagenes
import image from './assets/image.jpg';


function Aboutme (props){
    return (
        <section className="Aboutme-container">
            <div className="Aboutme-image-container">
                <img className="Aboutme-image" src={image}/>
            </div>
            <div className="Aboutme-info-container">
                <h1 className="Aboutme-title">About Me</h1>
                <hr/>
                <br/>
                <p className="Aboutme-text">Lorem ipsum dolor sit amet consectetur adipiscing elit conubia quisque, aliquet natoque class taciti cubilia ultrices donec vitae tortor placerat, nibh mattis netus senectus pulvinar fringilla duis aliquam. Nec mus aliquet sollicitudin fermentum bibendum hac dictumst luctus phasellus, mauris urna gravida viverra etiam convallis elementum sagittis fringilla ante, tempus posuere ligula donec laoreet vel scelerisque aliquam. Nisl rhoncus taciti placerat fusce fermentum nascetur dictum, ligula sapien nisi nulla dui cursus in, posuere suscipit venenatis erat dictumst dis.</p>
            </div>
        </section>
    );
}

export default Aboutme;
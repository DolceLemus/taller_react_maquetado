import React from 'react';
import './Contact.css';
import Icon from './Icon';
import fb from './assets/fb_icon.png';

function Contact (props){
    return(
        <section className="Contact-container">
            <h1>Contact Me</h1>
            <ul>
                <li><Icon src={fb} href="facebook.com/dulce"/></li>
                <li><Icon  /></li>
                <li><Icon  /></li>
            </ul>
        </section>
    );
}
 

export default Contact;
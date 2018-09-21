import React from 'react';
import './Contact.css';
import Icon from './Icon';

function Contact (props){
    return(
        <section className="Contact-container">
            <h1>Contact Me</h1>
            <ul>
                <li><Icon img="fb_icon.png" href="http://facebook.com/dulce" name="Facebook"/></li>
                <li><Icon img="github_icon.png" href="http://github.com/dulce" name="GitHub"/></li>
            </ul>
        </section>
    );
}

export default Contact;
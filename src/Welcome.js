import React from 'react';
import ReactDOM from 'react-dom';

import './Welcome.css';

import image from './assets/image2.jpg';

function Welcome(props){  
        return(
            <section className="Welcome-container">
                <div className="Welcome-background">
                   <p className="Welcome-text">Hi! My name is Dul</p>
                </div>
            </section>
        );
}

export default Welcome;
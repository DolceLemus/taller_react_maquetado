import React from 'react';
import ReactDOM from 'react-dom';

import './Welcome.css';

import image from './image2.jpg';

class Welcome extends React.Component{
    render(){
        return(
            <section className="Welcome-container">
                <div className="Welcome-background">
                   <p className="Welcome-text">Hi! My name is Dul</p>
                </div>
            </section>
        );
    }
}

export default Welcome;
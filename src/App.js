import React, { Component } from 'react';
import './App.css';

// secciones
import Welcome from './Welcome';
import Aboutme from './Aboutme';
import Proyect from './Proyect';
import Contact from './Contact';



class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Aboutme />
        <Proyect />
        <Contact />
      </div>
    );
  }
}

export default App;


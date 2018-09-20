import React, { Component } from 'react';
// import logo from './assets/logo.svg';
import './App.css';

// secciones
import Welcome from './Welcome';
import Aboutme from './Aboutme';



class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Aboutme />
      </div>
    );
  }
}

export default App;


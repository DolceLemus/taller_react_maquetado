import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import Aboutme from './Aboutme';

import registerServiceWorker from './registerServiceWorker';



const root = document.getElementById('root');

ReactDOM.render(<App />, root  );
// ReactDOM.render(<Aboutme />, root  );



registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import {observe} from './Game';
import {moveKnight} from './Game';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

observe(knightPosition =>{
    ReactDOM.render(<Board knightPosition={knightPosition}></Board>, rootElement);
});
registerServiceWorker();

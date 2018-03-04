import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Popup from 'react-popup';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Popup className="mm-popup" defaultOk="CLOSE"/>, document.getElementById('popupContainer'));
registerServiceWorker();

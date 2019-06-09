import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';

import '../css/main';

ReactDOM.render(<App />, document.getElementById('react-app'));

if (module.hot) module.hot.accept();

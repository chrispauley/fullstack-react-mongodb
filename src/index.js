import React from 'react';
import ReactDom from 'react-dom';
import data from './testData';

import App from './components/App.js';

ReactDom.render(
    <App contests={data.contests}/>, document.getElementById('root'));

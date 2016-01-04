'use strict';

import 'bootstrap-webpack';
import './styles/main.scss';
import ReactDOM from 'react-dom';

import App from './scripts/app';

ReactDOM.render(<App />, document.getElementById('landing'));
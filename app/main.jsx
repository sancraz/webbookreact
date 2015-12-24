/**
 * @jsx React.DOM
 */

'use strict';

require('bootstrap-webpack');
require('./styles/main.scss');

var App = require('./app');

React.render(<App />, document.getElementById('landing'));

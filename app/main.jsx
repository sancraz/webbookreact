'use strict';

require('bootstrap-webpack');
require('./styles/main.scss');

import App from './scripts/app';

React.render(<App />, document.body);
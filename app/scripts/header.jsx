'use strict';

var SignIn = require('./auth/signin');

var Header = React.createClass ({
	openSignInForm: function() {
		return React.render(<SignIn />, document.getElementById('landing'));
	},
 	render: function() {
 		return (
 			<header>
 				<a onClick={this.openSignInForm}>SIGN IN</a>
 			</header>
 		)
 	}
});

module.exports = Header;

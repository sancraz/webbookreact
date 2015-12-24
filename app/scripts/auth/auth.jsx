'use strict';

var SignIn = require('./signin'),
	SignUp = require('./signup');

var Authentification = React.createClass({
	render: function() {
		return (
			<div>
				<SignIn onAuthComplete={this.props.onAuthComplete} />
				<SignUp onAuthComplete={this.props.onAuthComplete} />
			</div>
		);
	}
});

module.exports = Authentification;

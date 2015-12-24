'use strict';

var Authentification = require('./scripts/auth/auth'),
	WorkoutLog = require('./scripts/auth/workoutlog');

var App = React.createClass({
	getInitialState: function() {
		return { signedIn: false };
	},

	render: function() {
		return (
			<div>
				{ this.state.signedIn ? <WorkoutLog onLogout={this._onLogout} /> :
				<Authentification onAuthComplete={this._onAuthComplete} />}
			</div>
		);
	},

	_onAuthComplete: function(result) {
		if (result()) {
			console.log(result());
			this.setState( { signedIn: true } );
		}
	},

	_onLogout: function() {
		this.setState( { signedIn: false } );
	}
});

module.exports = App;

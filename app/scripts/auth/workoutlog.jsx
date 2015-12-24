'use strict';

var Nav = require('./navigation'),
	DefineWorkout = require('./define'),
	StoreWorkout = require('./store'),
	History = require('./history');

var WorkoutLog = React.createClass({
	getInitialState: function() {
		return { view: 'define' };
	},

	render: function() {
		return (
			<div>
				<h1>Workout Log</h1>
				<Nav onLogout={this.props.onLogout} onNav={this._onNav}/>
				{this.state.view === "define" ? <DefineWorkout />: ""}
				{this.state.view === "store" ? <StoreWorkout />: ""}
				{this.state.view === "history" ? <History />: ""}
			</div>
		);
	},
	_onNav: function( theView ) {
		this.setState( { view: theView } );
	}
});

module.exports = WorkoutLog;
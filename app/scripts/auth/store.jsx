'use strict';

var Option = React.createClass({
	render: function() {
		return <option>{this.props.value}</option>;
	}
});

var StoreWorkout = React.createClass({
	_mockWorkouts: [
		{
			'name': 'Vitaliy',
			'type': 'developer',
			'description': 'frontend'
		},
		{
			'name': 'Alex',
			'type': 'developerToo',
			'description': 'frontendToo'
		}
	],

	render: function() {
		var opts = [];
		for (var i = 0; i < this._mockWorkouts.length; i++) {
			opts.push(<Option value={this._mockWorkouts[i].name} />);
		}
		return (
			<div id="logWorkout">
				<h2>Record Workout</h2>
				<label htmlFor="chooseWorkout">Workout:</label>
				<select name="" id="chooseWorkout">
					{opts}
				</select>
				<label htmlFor="workoutResult">Result:</label>
				<input id="workoutResult" />
				<input id="workoutDate" type="date" />
				<label htmlFor="notes">Notes:</label>
				<textarea id="notes"></textarea>
				<button>Store</button>
			</div>
		)
	},

	_Store: function() {
		//
	}
});

module.exports = StoreWorkout;

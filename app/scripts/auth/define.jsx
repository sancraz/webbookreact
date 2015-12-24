'use strict';

var DefineWorkout = React.createClass({
	render: function() {
		return (
			<div id="defineWorkouts">
				<h2>Define Workout</h2>
				<label htmlFor="defineName">Define
					<input type="text" id="defineName" />
				</label>
				<label htmlFor="defineType">type
					<input type="text" id="defineType" />
				</label>
				<label htmlFor="defineName">Description</label>
				<textarea id="defineDesc"></textarea>
				<button id="saveDefinition">save definition</button>
			</div>
		);
	}
});

module.exports = DefineWorkout;

/**
 * @jsx React.DOM
 */

'use strict';

var ListItem = React.createClass({
	render: function() {
		return <li>{this.props.name} - {this.props.result}</li>;
	}
});

var History = React.createClass({
	_mockHistory: [
		{
			'name': 'Vitaliy',
			'result': '1988',
			'notes': 'g-frontend'
		},
		{
			'name': 'Alex',
			'result': '1981',
			'notes': 'g-frontendToo'
		}
	],

	render: function() {
		var hist = this._mockHistory;
		var formattedLi = [];
		for (var i = 0; i < hist.length; i++) {
			var histObj = { name: hist[i].name, result: hist[i].result };
			formattedLi.push(<ListItem{ ...histObj } />);
		};
		return (
			<div>
				<h2>History</h2>
				<ul>
					{formattedLi}
				</ul>
			</div>
		);
	}
});

module.exports = History;

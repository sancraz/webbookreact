'use strict';

var Navigation = React.createClass({
	render: function() {
		return (
			<ul>
				<li><a href="#" onClick={this.props.onNav.bind(null, this._nav("define"))}>Define</a></li>
				<li><a href="#" onClick={this.props.onNav.bind(null, this._nav("store"))}>Store</a></li>
				<li><a href="#" onClick={this.props.onNav.bind(null, this._nav("history"))}>History</a></li>
				<li><a href="#" onClick={this.props.onLogout}>Logout</a></li>
			</ul>
		);
	},
	_nav: function( view ) {
		return view;
	}
});

module.exports = Navigation;
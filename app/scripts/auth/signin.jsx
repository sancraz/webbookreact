'use strict';

var SignIn = React.createClass({
	render: function() {
		return (
			<form className="form-horizontal signin_form">
				<div className="form-group">
					<label htmlFor="inputUserName" className="col-sm-2 control-label">Username</label>
					<div className="col-sm-10">
						<input type="text" className="form-control" id="inputUserName" placeholder="Username" />
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
					<div className="col-sm-10">
					<input type="password" className="form-control" id="inputPassword" placeholder="Password" />
					</div>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-2 col-sm-10">
						<a id="signIn" className="btn btn-default" onClick={this.props.onAuthComplete.bind( null, this._doAuth )}>Sign in</a>
					</div>
				</div>
			</form>
		);
	},

	_doAuth: function() {
		return true;
	}
});

module.exports = SignIn;

'use strict';

var SignUp = React.createClass({
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
					<label htmlFor="inputConfirm" className="col-sm-2 control-label">Confirm Password</label>
					<div className="col-sm-10">
					<input type="password" className="form-control" id="inputConfirm" placeholder="Confirm password" />
					</div>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-2 col-sm-10">
						<button id="signUp" className="btn btn-default" onClick={this.props.onAuthComplete.bind( null, this._createAccount )}>Sign up</button>
					</div>
				</div>
			</form>
		);
	},

	_createAccount: function() {
		return true;
	}
});

module.exports = SignUp;

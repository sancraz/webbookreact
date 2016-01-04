"use strict";

class SignUpModal extends React.Component {
	render() {
		return (
			<div className="modal fade" id="sign_up_modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 className="modal-title" id="myModalLabel">Modal title</h4>
			      </div>
			      <div className="modal-body">
			        ...
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			        <button type="button" className="btn btn-primary">Save changes</button>
			      </div>
			    </div>
			  </div>
			</div>
			)
	}
}

class SignOut extends React.Component {
	render() {
		console.log(this.props);	
		return (
			<li><a>Sign out</a></li>
		)
	}
}

class SignIn extends React.Component {
	render() {
		return (
			<li><a data-toggle="modal" data-target="#sign_up_modal">Sign up </a>or <a>Sign In</a></li>
		)
	}
}

export class Header extends React.Component {
    render() {
        return (
           	<header className="col-xs-12 header">
				<div className="col-xs-6 pull-left">{this.props.brandName}</div>
				<ul className="col-xs-6 pull-right">
					{this.props.user === 'Ale' ? <SignOut /> : <SignIn />}
				</ul>
				<SignUpModal />
			</header> 
    	);
  	}
}

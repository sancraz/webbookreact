"use strict";

export default class SignInModal extends React.Component {
	render() {
		return (
			<div className="modal fade" id="sign_in_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 className="modal-title text-center" id="exampleModalLabel">Sign in form</h4>
			      </div>
			      <div className="modal-body">
			        <form>
			          <div className="form-group">
			            <label forHtml="user_email" className="control-label">Email:</label>
			            <input type="email" className="form-control" id="user_name" />
			          </div>
					  <div className="form-group">
			            <label forHtml="user_password" className="control-label">Password:</label>
			            <input type="password" className="form-control" id="user_password" />
			          </div>
			        </form>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			        <button type="button" className="btn btn-primary">Sign in</button>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}
"use strict";

export default class SignInModal extends React.Component {

	onsubmit() {
		//hide sign in error message
		$('.notvaliduser').css('display', 'none');
		let selector1 = $('#user_name').val(),
			selector2 = $('#user_password').val();
		if ( selector1 === localStorage.email && selector2 == localStorage.password ) {
			//set item in localstorage, checking in Header
			localStorage.setItem('hasCurrentUser', true);
			$('#sign_in_modal').modal('toggle');
			//hide sign in error message
			$('.notvaliduser').css('display', 'none');
			//remove event "enterkey" press
			$('#sign_in_modal').unbind('keydown');
			window.location.reload();
			return true;
		} else {
			//show sign in error message
			$('.notvaliduser').css('display', 'block');
		}
	}

	componentDidMount() {
		//add event "enterkey" press
		var self = this;
		$('#sign_in_modal').bind('keydown', function(e) {
			if (e.keyCode == 13) {
				self.onsubmit();
			}
		});
	}

	render() {
		return (
			<div className="modal fade" 
				id="sign_in_modal" 
				tabIndex="-1" role="dialog" 
				aria-labelledby="exampleModalLabel">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" 
			        	className="close" 
			        	data-dismiss="modal" 
			        	aria-label="Close">
			        		<span aria-hidden="true">&times;</span>
			        </button>
			        <h4 className="modal-title text-center" id="exampleModalLabel">
			        	Sign in form
			        </h4>
			      </div>
			      <div className="modal-body">
			        <form>
			          <div className="form-group">
			            <label forHtml="user_email" className="control-label">
			            	Email:
			            </label>
			            <input type="email" className="form-control" id="user_name" />
			          </div>
					  <div className="form-group">
			            <label forHtml="user_password" className="control-label">
			            	Password:
			            </label>
			            <input type="password" className="form-control" id="user_password" />
			            <p className="form_message notvaliduser">
			            	Username or password is incorrect
			            </p>
			          </div>
			        </form>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-default" data-dismiss="modal">
			        	Close
			        </button>
			        <button type="button" 
			        	onClick={this.onsubmit.bind(this)} 
			        	className="btn btn-primary">
			        		Sign in
			        </button>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}
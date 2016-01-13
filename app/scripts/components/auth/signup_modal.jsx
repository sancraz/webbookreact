'use strict';

export default class SignUpModal extends React.Component {

	onsubmit() {
		//create array to validate all fields
		let signUpValid = [];

		//push each validation
		signUpValid.push(
			this.validNameBlur(),
			this.validEmailBlur(),
			this.validPswdBlur(),
			this.confirmPswdBlur()
		);

		//check each validation from array
		for (var i = 0; i < signUpValid.length; i++) {
			if (signUpValid[i] === false) {
				return;
			}
		};
		//put user information into localstorage
		localStorage.setItem('name', this.state.name);
		localStorage.setItem('email', this.state.email);
		localStorage.setItem('password', this.state.password);
		//clear input fields in forms
		$('.form-group input').val('');
		//close sign_up_modal
		$('#sign_up_modal').modal('toggle');
		//remove event "enterkey" press
		$('#sign_up_modal').unbind('keydown');
	}

	//validate name input onchange
	validName() {
		let selector = $('.name_validate'),
			name = $('.name_validate input').val();

		//error
		selector.addClass('has-error');
		//success
		if (name.length > 2) {
			selector.removeClass('has-error').addClass('has-success');
			this.setState({
				name: name
			});
			//hide error message
			$('.namenotvalid').css('display', 'none');
			return true;
		}
	}

	//validate name when namefield lose focus
	validNameBlur() {
		if ( !this.validName() ) {
			//show error message
			$('.namenotvalid').css('display', 'block');
			return false;
		}
	}

	//validate email onchange
	validEmail() {
		let selector = $('.email_validate'),
			email = $('.email_validate input').val(),
			email_pattern =
			/^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/gi,
			valid_email = email_pattern.test(email);

		selector.addClass('has-error');
		if (valid_email === true) {
			selector.removeClass('has-error').addClass('has-success');
			this.setState({
				email: email
			});
			//hide error message
			$('.emailnotvalid').css('display', 'none');
			return true;
		}
	}

	//validate email when namefield lose focus
	validEmailBlur() {
		if ( !this.validEmail() ) {
			//show error message
			$('.emailnotvalid').css('display', 'block');
			return false;
		}
	}

	//validate password onchange
	validPswdChange() {
		let selector = $('.pswd_validate'),
			pswd = $('.pswd_validate input').val(),
			pswd_pattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
			valid_pswd = pswd_pattern.test(pswd);

		selector.addClass('has-error');
		if (valid_pswd === true) {
			selector.removeClass('has-error').addClass('has-success');
			this.setState({
				password: pswd
			});
			//hide password error messages
			$('.pswdlowercase').css('display', 'none');
			$('.pswduppercase').css('display', 'none');
			$('.pswdnumeric').css('display', 'none');
			$('.pswdlength').css('display', 'none');
			return true;
		}
	}

	//validate password confirmation onchange
	confirmPswd() {
		$('.pswd_confirm').addClass('has-error');
		//check length of password
		if ($('.pswd_confirm input').val().length > 7) {
			//check values of password and confirmation fields
			//success
			if ($('.signup_password').val() === $('.signup_password_confirm').val()) {
				//hide confirmation error message
				$('.pswdnotconfirm').css('display', 'none');
				$('.pswd_confirm').removeClass('has-error').addClass('has-success');
				return true;
			//error
			} else {
				//show confirmation message
				$('.pswdnotconfirm').css('display', 'block');
				return false;
			}
		} else {
			return false;
		}
	}

	//validate password confirmation when password
	//confirmation field lose focus
	confirmPswdBlur() {

		if ( $('.pswd_confirm input').val().length < 8 ) {
			//show error confirmation message
			$('.pswdnotconfirm').css('display', 'block');
			return false;
		}

		if ( !this.confirmPswd() ) {
			return false;
		}
	}

	//validate password confirmation when password field lose focus
	validPswdBlur() {
		if ( !this.validPswdChange() ) {
			let pswd = $('.pswd_validate input').val(),
				contains_lowercase = /[a-z]/,
				contains_uppercase = /[A-Z]/,
				contains_number = /[0-9]/;

				//check lowercase character
				if (contains_lowercase.test(pswd) === false) {
					//show lowercase error
					$('.pswdlowercase').css('display', 'block');
					return false;
				}

				//check uppercase character
				if (contains_uppercase.test(pswd) === false) {
					//show uppercase error
					$('.pswduppercase').css('display', 'block');
					return false;
				}

				//check number character
				if (contains_number.test(pswd) === false) {
					//show number error
					$('.pswdnumeric').css('display', 'block');
					return false;
				}

				//check password length
				if (selector.val().length < 8) {
					//show length error
					$('.pswdlength').css('display', 'block');
					return false;
				}
			return false;
		}
	}

	componentDidMount() {
		//add event "enterkey" press
		var self = this;
		$('#sign_up_modal').bind('keydown', function(e) {
			if (e.keyCode == 13) {
				self.onsubmit();
			}
		});
	}

	render() {
		return (
			<div className="modal fade" 
				id="sign_up_modal" 
				tabIndex="-1" 
				role="dialog" 
				aria-labelledby="myModalLabel">

				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" 
								className="close" 
								data-dismiss="modal" 
								aria-label="Close">

								<span aria-hidden="true">&times;</span>
							</button>
							<h4 className="modal-title" id="myModalLabel">
								Please feel the fields to sign up
							</h4>
						</div>
						<div className="modal-body">
							<div className="form-group name_validate">
								<input type="username" 
									onBlur={this.validNameBlur.bind(this)} 
									onChange={this.validName.bind(this)} 
									className="form-control" 
									placeholder="Full name" />

								<p className="form_message namenotvalid">
									Please, enter a valid name
								</p>
							</div>
							<div className="form-group email_validate">
								<input type="email" 
									onBlur={this.validEmailBlur.bind(this)} 
									onChange={this.validEmail.bind(this)} 
									className="form-control" 
									placeholder="Email" />

								<p className="form_message emailnotvalid">
									Please, enter a valid email
								</p>
							</div>
							<div className="form-group pswd_validate">
								<input type="password" 
									onBlur={this.validPswdBlur.bind(this)} 
									onChange={this.validPswdChange.bind(this)} 
									className="form-control signup_password" 
									placeholder="Password" />

								<p className="form_message pswdlowercase">
									The password should contain lowercase character
								</p>
								<p className="form_message pswduppercase">
									The password should contain uppercase character
								</p>
								<p className="form_message pswdnumeric">
									The password should contain numeric character
								</p>
								<p className="form_message pswdlength">
									The password should contain more than 7 characters
								</p>
							</div>
							<div className="form-group pswd_confirm">
								<input type="password" 
									onBlur={this.confirmPswdBlur.bind(this)} 
									onChange={this.confirmPswd.bind(this)} 
									className="form-control signup_password_confirm" 
									placeholder="Confirm password" />
									
								<p className="form_message pswdnotconfirm">
									Password and confirmation should match
								</p>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">
								Cancel
							</button>
							<button onClick={this.onsubmit.bind(this)} 
								type="button" id="signup_button" 
								className="btn btn-primary">
									Confirm
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

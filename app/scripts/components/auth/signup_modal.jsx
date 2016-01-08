'use strict';

export default class SignUpModal extends React.Component {

	onsubmit() {
		let signUpValid = [];

		signUpValid.push(
			this.validNameBlur(),
			this.validEmailBlur(),
			this.validPswdBlur(),
			this.confirmPswdBlur()
		);

		for (var i = 0; i < signUpValid.length; i++) {
			if (signUpValid[i] === false) {
				return;
			}
		};
		localStorage.setItem('name', this.state.name);
		localStorage.setItem('email', this.state.email);
		localStorage.setItem('password', this.state.password);
		console.log(this.state);
		$('.form-group input').val('');
		$('#sign_up_modal').modal('toggle');
	}

	validName() {
		let selector = $('.name_validate'),
			name = $('.name_validate input').val();

		selector.addClass('has-error');
		if (name.length > 2) {
			selector.removeClass('has-error').addClass('has-success');
			this.setState({
				name: name
			});
			$('.namenotvalid').css('display', 'none');
			return true;
		}
	}

	validNameBlur() {
		if ( !this.validName() ) {
			$('.namenotvalid').css('display', 'block');
			return false;
		}
	}

	validEmail() {
		let selector = $('.email_validate'),
			email = $('.email_validate input').val(),
			email_pattern = /^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/gi,
			valid_email = email_pattern.test(email);

		selector.addClass('has-error');
		if (valid_email === true) {
			selector.removeClass('has-error').addClass('has-success');
			this.setState({
				email: email
			});
			$('.emailnotvalid').css('display', 'none');
			return true;
		}
	}

	validEmailBlur() {
		if ( !this.validEmail() ) {
			$('.emailnotvalid').css('display', 'block');
			console.log('email error');
			return false;
		}
	}

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
			$('.pswdlowercase').css('display', 'none');
			$('.pswduppercase').css('display', 'none');
			$('.pswdnumeric').css('display', 'none');
			$('.pswdlength').css('display', 'none');
			return true;
		}
	}

	confirmPswd() {
		$('.pswd_confirm').addClass('has-error');
		if ($('.pswd_confirm input').val().length > 7) {
			if ($('.signup_password').val() === $('.signup_password_confirm').val()) {
				$('.pswdnotconfirm').css('display', 'none');
				$('.pswd_confirm').removeClass('has-error').addClass('has-success');
				return true;
			} else {
				$('.pswdnotconfirm').css('display', 'block');
				return false;
			}
		} else {
			return false;
		}
	}

	confirmPswdBlur() {

		if ( $('.pswd_confirm input').val().length < 8 ) {
			$('.pswdnotconfirm').css('display', 'block');
			return false;
		}

		if ( !this.confirmPswd() ) {
			return false;
		}
	}

	validPswdBlur() {
		if ( !this.validPswdChange() ) {
			let pswd = $('.pswd_validate input').val(),
				contains_lowercase = /[a-z]/,
				contains_uppercase = /[A-Z]/,
				contains_number = /[0-9]/;

				if (contains_lowercase.test(pswd) === false) {
					$('.pswdlowercase').css('display', 'block');
					console.log('error lowercase');
					return false;
				}

				if (contains_uppercase.test(pswd) === false) {
					$('.pswduppercase').css('display', 'block');
					console.log('error uppercase');
					return false;
				}

				if (contains_number.test(pswd) === false) {
					$('.pswdnumeric').css('display', 'block');
					console.log('error number');
					return false;
				}

				if (selector.val().length < 8) {
					$('.pswdlength').css('display', 'block');
					console.log('should be more than 7 characters');
					return false;
				}
			return false;
		}
	}

	render() {
		return (
			<div className="modal fade" id="sign_up_modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 className="modal-title" id="myModalLabel">Please feel the fields to sign up</h4>
						</div>
						<div className="modal-body">
							<div className="form-group name_validate">
								<input type="username" onBlur={this.validNameBlur.bind(this)} onChange={this.validName.bind(this)} className="form-control" placeholder="Full name" />
								<p className="form_message namenotvalid">Please, enter a valid name</p>
							</div>
							<div className="form-group email_validate">
								<input type="email" onBlur={this.validEmailBlur.bind(this)} onChange={this.validEmail.bind(this)} className="form-control" placeholder="Email" />
								<p className="form_message emailnotvalid">Please, enter a valid email</p>
							</div>
							<div className="form-group pswd_validate">
								<input type="password" onBlur={this.validPswdBlur.bind(this)} onChange={this.validPswdChange.bind(this)} className="form-control signup_password" placeholder="Password" />
								<p className="form_message pswdlowercase">The password should contain lowercase character</p>
								<p className="form_message pswduppercase">The password should contain uppercase character</p>
								<p className="form_message pswdnumeric">The password should contain numeric character</p>
								<p className="form_message pswdlength">The password should contain more than 7 characters</p>
							</div>
							<div className="form-group pswd_confirm">
								<input type="password" onBlur={this.confirmPswdBlur.bind(this)} onChange={this.confirmPswd.bind(this)} className="form-control signup_password_confirm" placeholder="Confirm password" />
								<p className="form_message pswdnotconfirm">Password and confirmation should match</p>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
							<button onClick={this.onsubmit.bind(this)} type="button" id="signup_button" className="btn btn-primary">Confirm</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

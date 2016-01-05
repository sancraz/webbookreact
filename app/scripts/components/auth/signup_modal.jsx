'use strict';

export default class SignUpModal extends React.Component {

	validEmail() {
		let selector = $('.email_validate'),
			email = $('.email_validate input').val(),
			email_pattern = /^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/gi,
			valid_email = email_pattern.test(email);
		selector.addClass('has-error');
		if (valid_email === true) {
			selector.removeClass('has-error').addClass('has-success');
			return true;
		}
	}

	validEmailBlur() {
		if ( !this.validEmail() ) {
			console.log('email error');
		}
	}

	validPswdChange() {
		$('.pswd_validate').addClass('has-error');
		var pswd = $('.pswd_validate input').val();
		var pswd_pattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
		var valid_pswd = pswd_pattern.test(pswd);
		if (valid_pswd === true) {
			$('.pswd_validate').removeClass('has-error').addClass('has-success');
		}
	}

	confirmPswd() {
		$('.pswd_confirm').addClass('has-error');
		if ($('.pswd_confirm input').val().length > 7) {
			if ($('.signup_password').val() === $('.signup_password_confirm').val()) {
				$('.pswdnotconfirm').css('display', 'none');
			} else {
				$('.pswdnotconfirm').css('display', 'block');
			}
		}
	}

	validPswdBlur() {
		let selector = $('.pswd_validate input');
		selector.blur(function() {
			var pswd = $('.pswd_validate input').val();
			var contains_lowercase = /[a-z]/;
			var contains_uppercase = /[A-Z]/;
			var contains_number = /[0-9]/;

			if (contains_lowercase.test(pswd) === false) {
				console.log('error lowercase');
				// alert("Password must include a lowercase letter");
				return false;
			}

			if (contains_uppercase.test(pswd) === false) {
				console.log('error uppercase');
				// alert("Password must include an uppercase letter");
				return false;
			}

			if (contains_number.test(pswd) === false) {
				console.log('error number');
				// alert("Password must include a number");
				return false;
			}

			if (selector.val().length < 8) {
				console.log('should be more than 7 characters');
				return false;
			}
		})
	}

	validForm() {
		alert(123);
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
							<div className="form-group">
								<input type="username" className="form-control" placeholder="Full name" />
							</div>
							<div className="form-group email_validate">
								<input type="email" onBlur={this.validEmailBlur.bind(this)} onChange={this.validEmail.bind(this)} className="form-control" placeholder="Email" />
							</div>
							<div className="form-group pswd_validate">
								<input type="password" onBlur={this.validPswdBlur.bind(this)} onChange={this.validPswdChange.bind(this)} className="form-control signup_password" placeholder="Password" />
								<p className="form_message passwordlength">The password must contain more than 7 characters</p>
							</div>
							<div className="form-group pswd_confirm">
								<input type="password" onChange={this.confirmPswd.bind(this)} className="form-control signup_password_confirm" placeholder="Confirm password" />
								<p className="form_message pswdnotconfirm">Password and confirmation should match</p>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
							<button onClick={this.validForm.bind(this)} type="button" id="signup_button" className="btn btn-primary">Confirm</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

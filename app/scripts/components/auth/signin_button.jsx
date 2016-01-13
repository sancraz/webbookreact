'use strict';

export default class SignIn extends React.Component {

	openModal() {
		//avoid error messages in signin_modal
		$('.form_message').css('display', 'none');
		//avoid error-inputs in signin_modal
		$('.form-group').removeClass('has-error');
		//clear input fields in forms
		$('.form-group input').val('');
	}

	render() {
		return (
			<li>
				<a data-toggle="modal" 
					onClick={this.openModal.bind(this)} 
					data-target="#sign_up_modal">
						Sign up 
				</a> or <a data-toggle="modal" 
					onClick={this.openModal.bind(this)} 
					data-target="#sign_in_modal">
						Sign In
				</a>
			</li>
		)
	}
}
'use strict';

export default class SignIn extends React.Component {
	openModal() {
		$('.form_message').css('display', 'none');
		$('.form-group').removeClass('has-error');
		$('.form-group input').val('');
	}

	render() {
		return (
			<li><a data-toggle="modal" onClick={this.openModal.bind(this)} data-target="#sign_up_modal">Sign up </a>or 
			<a data-toggle="modal" onClick={this.openModal.bind(this)} data-target="#sign_in_modal"> Sign In</a></li>
		)
	}
}
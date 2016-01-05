'use strict';

export default class SignIn extends React.Component {
	render() {
		return (
			<li><a data-toggle="modal" data-target="#sign_up_modal">Sign up </a>or 
			<a data-toggle="modal" data-target="#sign_in_modal"> Sign In</a></li>
		)
	}
}
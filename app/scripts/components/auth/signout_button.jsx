'use strict';

export default class SignOut extends React.Component {
	render() {	
		return (
			<li>signed in as {localStorage.email}
				<a data-toggle="modal" data-target="#sign_out_modal">
					Sign out
				</a>
			</li>
		)
	}
}
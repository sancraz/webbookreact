'use strict';

export default class SignOut extends React.Component {
	render() {
		console.log(this.props);	
		return (
			<li><a data-toggle="modal" data-target="#sign_out_modal">Sign out</a></li>
		)
	}
}
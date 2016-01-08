"use strict";

import SignUpModal from './auth/signup_modal';
import SignInModal from './auth/signin_modal';
import SignOutModal from './auth/signout_modal';
import SignIn from './auth/signin_button';
import SignOut from './auth/signout_button';

export class Header extends React.Component {
    render() {
        return (
           	<header className="col-xs-12 header">
				<div className="col-xs-6 pull-left">{this.props.brandName}</div>
				<ul className="col-xs-6 pull-right">
					{localStorage.hasCurrentUser === 'true' ? <SignOut /> : <SignIn />}
				</ul>
				<SignUpModal />
				<SignInModal />
				<SignOutModal />
			</header> 
    	);
  	}
}

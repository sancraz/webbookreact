"use strict";

export class Header extends React.Component {
    render() {
        return (
           	<header className="col-xs-12 header">
				<div className="col-xs-6 pull-left">{this.props.brandName}</div>
				<ul className="col-xs-6 pull-right">
					<li>Sign up</li>
					<li>Sign out</li>
					<li>Sign in</li>
				</ul>
			</header> 
    	);
  	}
}
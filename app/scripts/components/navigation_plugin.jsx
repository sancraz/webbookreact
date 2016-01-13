"use strict";

export class NavigationPlugin extends React.Component {
    
	backToHomePage() {
		window.location.reload();
	}
	
    render() {
        return (
            <div className="nav_placeholder">
                <p>Here will be a demo of the plugin for navigation on the page</p>
                <a href="#" onClick={this.backToHomePage.bind(this)}>Back to homepage</a>
            </div> 
    	);
  	}
}
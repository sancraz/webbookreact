"use strict";

export class AboutUs extends React.Component {
	
	backToHomePage() {
		window.location.reload();
	}

    render() {
        return (
           	<div className="about_us">
           		<p>Vitaliy Andrushko - frontend developer</p>
           		<p>Oleksandr Mikhalitsyn - frontend developer</p>
           		<a href="#" onClick={this.backToHomePage.bind(this)}>Back to homepage</a>
           	</div> 
    	);
  	}
}

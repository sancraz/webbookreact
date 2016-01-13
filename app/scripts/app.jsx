'use strict';

import { SearchSection, Header, Footer, NavigationPlugin } from './components/index';
import session_actions from './actions/session_actions';

export default class App extends React.Component {

	componentWillMount() {
		this.getUser();
	}

	componentDidMount() {
        this.setState({
            route: window.location.hash.substring(1)
        })
	}

	getUser() {
		if ( session_actions.getCurrentUser() ) {
        	this.setState({
        		user: localStorage.email
        	});
    	};
    	console.log(this.state);
    }

	render() {
        let Child;
        console.log(this.state);
        switch (this.state.route) {
            case 'navplugin': Child = NavigationPlugin; break;
            default:      Child = SearchSection;
        }

		return (
    		<div className='webbooks-app'>
    			<Header brandName="webbooks" user={this.state.user} />
                <Child />
    			<Footer brandName="webbooks" developName="La`Soft and RailsSoft, Lviv" />
      		</div>
    	);
  	}
}

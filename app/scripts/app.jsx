'use strict';

import { SearchSection, Header, Footer, NavPluginButton, NavigationPlugin } from './components/index';
import session_actions from './actions/session_actions';

export default class App extends React.Component {

	componentWillMount() {
		this.getUser();
	}

	componentDidMount() {
		console.log(this.state);
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
        console.log(this.state.user);
		return (
    		<div className='webbooks-app'>
    			<Header brandName="webbooks" user={this.state.user} />
                <SearchSection />
                {
                    this.state.user == undefined ?
                    <NavigationPlugin />:
                    <NavPluginButton />
                }
    			<Footer brandName="webbooks" developName="La`Soft and RailsSoft, Lviv" />
      		</div>
    	);
  	}
}

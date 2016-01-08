'use strict';

import { SearchSection, Header, Footer } from './components/index';
import session_actions from './actions/session_actions';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: 'vitaliy'
		};
	}

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
		return (
    		<div className='webbooks-app'>
    			<Header brandName="webbooks" user={this.state.user} />
    			<SearchSection />
    			<Footer brandName="webbooks" developName="La`Soft and RailsSoft, Lviv" />
      		</div>
    	);
  	}
}

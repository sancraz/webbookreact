'use strict';

import { SearchSection, Header, Footer } from './components/index';

class App extends React.Component {
	render() {
		return (
    		<div className='webbooks-app'>
    			<Header brandName="webbooks" />
    			<SearchSection />
    			<Footer brandName="webbooks" developName="LA'Soft and RailsSoft, Lviv" />
      		</div>
    	);
  	}
}

export default App;

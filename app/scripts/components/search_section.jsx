"use strict";

export class SearchSection extends React.Component {
    render() {
        return (
            <section className="col-xs-12 search_section">
                <ul className="col-xs-8 col-xs-offset-2">
                    <li>publishing house</li>
                </ul>
                <div className="col-xs-8 col-xs-offset-2 input-group input-group-lg">
                    <input type="text" 
                        className="form-control search_input" 
                placeholder="book or author" />
                </div>
            </section> 
    	);
  	}
}
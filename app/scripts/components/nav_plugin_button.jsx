"use strict";

export class NavPluginButton extends React.Component {

    goToNavPlugin() {
        alert(123);
    }

    render() {
        return (
            <div className="nav_plugin">
                <button type="button" 
                    onClick={this.goToNavPlugin.bind(this)} 
                    className="btn btn-default">
                        Go to Plugin Page
                </button>
            </div>
        );
    }
}
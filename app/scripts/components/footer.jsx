'use strict';

export class Footer extends React.Component {
    render() {
        return (
            <footer className="col-xs-12 footer">
                <p className="col-xs-6 pull-left copyright">
                    © {new Date().getFullYear()}, {this.props.brandName}. All right reserved.
                </p>
                <p className="col-xs-6 pull-right powered">
                    Powered by {this.props.developName}.
                </p>
            </footer>
    );
  }
}

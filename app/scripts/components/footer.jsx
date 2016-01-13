'use strict';

export class Footer extends React.Component {
    goToAboutUs() {
        window.location.reload();
    }

    render() {
        return (
            <footer className="col-xs-12 footer">
                <p className="col-xs-5 copyright">
                    © {new Date().getFullYear()}, {this.props.brandName}. All right reserved.
                </p>
                <p className="col-xs-5 powered">
                    Powered by {this.props.developName}.
                </p>
                <a href="#about" 
                    className="col-xs-2"
                    onClick={this.goToAboutUs.bind(this)}>
                        about us
                </a>
            </footer>
    );
  }
}

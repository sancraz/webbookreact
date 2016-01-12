"use strict";

export default class SignOutModal extends React.Component {
	onsubmit() {
		$('#sign_out_modal').modal('toggle');
		$('#sign_out_modal').unbind('keydown');
		localStorage.clear();
		window.location.reload();
	}

	componentDidMount() {
		var self = this;
		$('#sign_out_modal').bind('keydown', function(e) {
			if (e.keyCode == 13) {
				self.onsubmit();
			}
		});
	}

	render() {
		return (
			<div className="modal fade"
				 id="sign_out_modal" 
				 tabIndex="-1" role="dialog" 
				 aria-labelledby="exampleModalLabel">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" 
			        	className="close" 
			        	data-dismiss="modal" 
			        	aria-label="Close">
			        		<span aria-hidden="true">&times;</span>
			        </button>
			        <h4 className="modal-title text-center" id="exampleModalLabel">
			        	Are you sure you want to sign out?
			        </h4>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-default" data-dismiss="modal">
			        	NO
			        </button>
			        <button type="button" 
			        	onClick={this.onsubmit.bind(this)} 
			        	className="btn btn-primary">
			        		YES
			        </button>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}
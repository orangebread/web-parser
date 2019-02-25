import React, { Component } from 'react';

class UrlBar extends Component{
	constructor(props) {
		super(props);

		this.state = {
			url: ''
		}
	}


	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state.url);
	}

	render() {
		return (
			<div className="url-bar">
				<form onSubmit={this.onFormSubmit}>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Enter url address"
							onChange={e => this.setState({ url: e.target.value })}
						/>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>

			</div>
		);
	}
}

export default UrlBar;
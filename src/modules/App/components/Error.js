import React  from 'react';

const Error = props => {
	if (props.error) {
		return (
			<div className="error-container">
				<div className="alert alert-primary" role="alert">Please enter a valid url.</div>
			</div>
		);
	}
	return (
		<div></div>
	);
}

export default Error;

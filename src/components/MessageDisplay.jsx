import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showMessageDisplay } from '../actions';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
class MessageDisplay extends Component {
	handleClick = () => {
		this.props.showMessageDisplay(false);
	};
	renderList = () => {
		return (
			<div className='text-center'>
				<Alert
					variant={this.props.messageToggle.variant}
					className='mb-0'>
					{this.props.messageToggle.message}
					<Button
						variant={`outline-${this.props.messageToggle.variant}`}
						size='sm'
						className='ml-2'
						onClick={this.handleClick}>
						Dismiss
					</Button>
				</Alert>
			</div>
		);
	};
	render() {
		return this.renderList();
	}
}
const mapStateToProps = state => {
	return { messageToggle: state.messageDisplay };
};

export default connect(mapStateToProps, { showMessageDisplay })(MessageDisplay);

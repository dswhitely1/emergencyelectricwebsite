import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Header from './Header';
import Application from './Application';
import MessageDisplay from './MessageDisplay';
import Footer from './Footer';

class HomePage extends Component {
	render() {
		return (
			<div id='page-top'>
				<Navigation />
				<Header />
				<Application />
				{this.props.messageToggle.messageDisplay ? (
					<MessageDisplay />
				) : null}
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { messageToggle: state.messageDisplay };
};

export default connect(mapStateToProps)(HomePage);
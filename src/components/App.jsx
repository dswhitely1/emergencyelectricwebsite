import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import MessageDisplay from './MessageDisplay';
import Header from './Header';
import ContentSection from './ContentSection';
import Application from './Application';
import Footer from './Footer';

import './App.css';
class App extends Component {
	renderList = () => {
		return (
			<div id='page-top'>
				<Navigation />
				<Header />
				{this.props.appRoute.route ? (
					<Application />
				) : (
					<ContentSection />
				)}

				{this.props.messageToggle.messageDisplay ? (
					<MessageDisplay />
				) : null}
				<Footer />
			</div>
		);
	};
	render() {
		return this.renderList();
	}
}
const mapStateToProps = state => {
	return {
		messageToggle : state.messageDisplay,
		appRoute      : state.applicationRoute,
	};
};

export default connect(mapStateToProps)(App);

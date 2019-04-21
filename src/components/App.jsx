import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import ContentSection from './ContentSection';
import Footer from './Footer';

import './App.css';
class App extends Component {
	render() {
		return (
			<div id='page-top'>
				<Navigation />
				<Header />
				<ContentSection />
				<Footer />
			</div>
		);
	}
}

export default App;

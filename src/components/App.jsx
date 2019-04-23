import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import ApplyPage from './ApplyPage';
class App extends Component {
	render() {
		return (
			<div>
				<Route exact path='/' component={HomePage} />
				<Route path='/apply' component={ApplyPage} />
			</div>
		);
	}
}

export default App;

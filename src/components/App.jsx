import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import ApplyPage from './ApplyPage';
const baseUrl = process.env.PUBLIC_URL;
class App extends Component {
	render() {
		return (
			<div>
				<Route exact path={baseUrl + '/'} component={HomePage} />
				<Route path={baseUrl + '/apply'} component={ApplyPage} />
			</div>
		);
	}
}

export default App;

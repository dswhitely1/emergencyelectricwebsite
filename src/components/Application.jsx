import React, { Component } from 'react';
import Introduction from './Application/Introduction';
import PersonalData from './Application/PersonalData';
import './ContentSection.css';
class Application extends Component {
	render() {
		return (
			<div>
				<Introduction />
				<PersonalData />
			</div>
		);
	}
}
export default Application;

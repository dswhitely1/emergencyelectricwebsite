import React, { Component } from 'react';
import Introduction from './Application/Introduction';
import PersonalData from './Application/PersonalData';
import PersonalData2 from './Application/PersonalData2';
import './ContentSection.css';
import WorkHistory from './Application/WorkHistory';
import Education from './Application/Education';
class Application extends Component {
	render() {
		return (
			<div>
				<Introduction />
				<PersonalData />
				<PersonalData2 />
				<WorkHistory />
				<Education />
			</div>
		);
	}
}
export default Application;

import React, { Component } from 'react';
import About from './HomePage/About';
import Services from './HomePage/Services';
import Testimonials from './HomePage/Testimonials';
import Goals from './HomePage/Goals';
import Contact from './HomePage/Contact';
import API from '../api';
import './ContentSection.css';

class ContentSection extends Component {
	submit = values => {
		API.post('/send-email', values).then(res => {
			console.log(res);
			console.log(res.data);
		});
	};
	render() {
		return (
			<div>
				<About />
				<Services />
				<Testimonials />
				<Goals />
				<Contact onSubmit={this.submit} />
			</div>
		);
	}
}

export default ContentSection;

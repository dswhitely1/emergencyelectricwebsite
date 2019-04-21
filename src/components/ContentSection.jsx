import React, { Component } from 'react';
import About from './HomePage/About';
import Services from './HomePage/Services';
import Testimonials from './HomePage/Testimonials';
import Goals from './HomePage/Goals';
import ContactForm from './HomePage/ContactForm';
import './ContentSection.css';

class ContentSection extends Component {
	render() {
		return (
			<div>
				<About />
				<Services />
				<Testimonials />
				<Goals />
				<ContactForm />
			</div>
		);
	}
}

export default ContentSection;

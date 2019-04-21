import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Goals = () => {
	return (
		<section
			className='content-section bg-danger text-white text-center'
			id='goals'>
			<Container>
				<div className='content-section-heading'>
					<h2 className='mb-5'>Our Goals</h2>
					<p>
						We’re committed to excellence. Our goal is to exceed
						your expectations. Using our years of experience and
						expertise and by providing a dynamic and skilled team we
						will ensure your projects are a complete success. Our
						primary measure of success is customer satisfaction. We
						define customers as employees, partners and clients. Our
						intent is to earn and maintain the respect and trust of
						everyone we come in contact with when representing
						Emergency Electric Inc.
					</p>
				</div>
				<Button variant='outline-light' size='lg' href='#contact'>
					Contact Us
				</Button>
			</Container>
		</section>
	);
};

export default Goals;

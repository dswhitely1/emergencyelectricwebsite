import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer className='bg-dark text-light pt-3 pb-1'>
			<Container className='text-center'>
				<Row>
					<div className='col-lg-4 mb-5 mb-lg-0'>
						<address>
							<p>
								<strong>Emergency Electric Inc</strong>
								<br />7525 Main St NE<br />Lanesville, IN 47136
							</p>
						</address>
						<Button
							href='mailto:emergency_electric@hotmail.com'
							variant='danger'
							size='md'>
							Email Us
						</Button>
					</div>
					<div className='col-lg-4 mb-5 mb-lg-0'>
						<p>
							Office Number: (812) 952-6014<br />Emergency Number:
							(502) 727-4823
						</p>
					</div>
					<div className='col-lg-4 mb-5 mb-lg-0'>
						<p>
							Office Hours:<br />Monday thru Friday: 8:00am -
							4:00pm
						</p>
						<p>
							24 Hour Service<br />Licensed & Insured<br />Residential
							and Commercial
						</p>
					</div>
				</Row>
				<p>
					Copyright 2019 - Emergency Electric Inc<br />
					Designed by{' '}
					<a href='https://www.donwhitely.com'>
						Digital Solutions by Don
					</a>
				</p>
			</Container>
		</footer>
	);
};

export default Footer;

import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer className='bg-dark text-light'>
			<Container>
				<Row>
					<div className='p-4 col-md-3'>
						<h2 className='mb-4'>Emergency Electric Inc</h2>
						<p>
							7525 Main St NE<br />Lanesville, IN 47136
						</p>
					</div>
					<div className='p-4 col-md-3'>
						<h2 className='mb-4'>Contact</h2>
						<p>
							<i className='fa d-inline mr-3 text-muted fa-phone' />(812)
							952-6014
						</p>
						<p>
							<i className='fa d-inline mr-3 text-muted fa-phone' />(502)
							727-4923
						</p>
						<p>
							<a href='mailto:emergency_electric@hotmail.com'>
								<i className='fa d-inline mr-3 text-muted fa-envelop-o' />Send
								us an Email
							</a>
						</p>
					</div>
					<div className='p-4 col-md-3'>
						<h2 className='mb-4'>Now Hiring</h2>
						<form>
							<fieldset className='form-group'>
								<label htmlFor='applyEmail'>Get our Application</label>
								<input
									type='email'
									className='form-control'
									placeholder='Enter email'
								/>
							</fieldset>
							<button type='submit' className='btn btn-outline-light'>
								Submit
							</button>
						</form>
					</div>

					<div className='p-4 col-md-3'>
						<h2 className='mb-4'>Services</h2>
						<p>
							24 Hour Service<br />Licensed & Insured<br />Residential and
							Commercial
						</p>
					</div>
				</Row>
				<Row>
					<div className='col-md-12 mt-3'>
						<p className='text-center'>{`Copyright 2019 - All rights reserved`}</p>
					</div>
				</Row>
			</Container>

			<p>Copyright 2019 - Emergency Electric Inc</p>
			<p>
				Designed by{' '}
				<a href='https://www.donwhitely.com'>Digital Solutions by Don</a>
			</p>
		</footer>
	);
};

export default Footer;

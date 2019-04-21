import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
const About = () => {
	return (
		<section className='content-section bg-light' id='about'>
			<Container className='text-center'>
				<Row>
					<div className='col-lg-10 mx-auto'>
						<h2>Why Choose Us</h2>
						<p className='lead'>
							<strong>
								With many years of experience in the Electrician
								Industry, we take pride in our professionalism,
								punctuality and customer service.
							</strong>
						</p>
						<p className='lead'>
							Our primary measure of success is customer
							satisfaction. We define customers as employees,
							partners and clients. Our intent is to earn and
							maintain the respect and trust of everyone we come
							in contact with when representing Emergency Electric
							Inc.
						</p>
						<p className='lead mb5'>
							We believe in a personal touch to making ourselves
							known in the market. Referral and repeat business is
							important to us. We want every customer to be 100%
							satisfied with our service and work. WE are
							confident that we meet this goal and that is why we
							offer a 100% customer satisfaction guarantee.
						</p>
						<Scrollchor
							to='#services'
							className='btn btn-danger btn-lg mr-2'>
							What We Offer
						</Scrollchor>
						<Scrollchor
							to='#page-top'
							className='btn btn-danger btn-lg'>
							<FontAwesomeIcon icon={faAngleDoubleUp} />
						</Scrollchor>
					</div>
				</Row>
			</Container>
		</section>
	);
};

export default About;

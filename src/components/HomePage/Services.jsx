import React from 'react';
import { Container, Row, Image, Button } from 'react-bootstrap';
import residential from '../../images/erik-mclean-1117932-unsplash.jpg';
import commercial from '../../images/osama-saeed-1433239-unsplash.jpg';
import industrial from '../../images/robin-sommer-559996-unsplash.jpg';
import Scrollchor from 'react-scrollchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
	return (
		<section
			className='content-section bg-danger text-white text-center'
			id='services'>
			<Container>
				<div className='content-section-heading'>
					<h3 className='mb-0'>Services</h3>
					<h2 className='mb-5'>We Specialize In</h2>
				</div>
				<Row>
					<div className='col-lg-4 col-md-6 mb-5 mb-lg-0'>
						<Image
							src={residential}
							className='img-thumbnail mb-2'
						/>
						<h4>
							<strong>Residential</strong>
						</h4>
						<p>
							Emergency Electric Inc can assist with any type of
							residential renovation, whether you are building an
							extension to your home or installing pot lights in
							your condo.
						</p>
					</div>
					<div className='col-lg-4 col-md-6 mb-5 mb-lg-0'>
						<Image
							src={commercial}
							className='img-thumbnail mb-2'
						/>
						<h4>
							<strong>Commercial</strong>
						</h4>
						<p>
							Emergency Electric Inc offers a variety of
							commercial services, by our commercial electrical
							contractors.
						</p>
					</div>
					<div className='col-lg-4 col-md-6 mb-5 mb-lg-0'>
						<Image
							src={industrial}
							className='img-thumbnail mb-2'
						/>
						<h4>
							<strong>Industrial</strong>
						</h4>
						<p>
							Electric Inc offers a variety of industrial services
							by our industrial electrical contractors.
						</p>
					</div>
				</Row>
				<Scrollchor
					to='#testimonials'
					className='btn btn-outline-light btn-lg mr-2'>
					What Others Say
				</Scrollchor>
				<Scrollchor
					to='#page-top'
					className='btn btn-outline-light btn-lg'>
					<FontAwesomeIcon icon={faAngleDoubleUp} />
				</Scrollchor>
			</Container>
		</section>
	);
};

export default Services;

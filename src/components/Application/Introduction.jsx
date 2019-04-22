import React from 'react';
import Container from 'react-bootstrap/Container';
import Scrollchor from 'react-scrollchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
const Introduction = () => {
	return (
		<section className='content-section bg-light' id='introduction'>
			<Container className='text-center'>
				<div className='content-section-heading'>
					<h3 className='mb-0'>Employment Application</h3>
					<h2 className='mb-5'>Introduction</h2>
				</div>
				<div className='col-lg-10 mx-auto'>
					<p className='lead'>
						<strong>EMERGENCY ELECTRIC INC</strong>, is an equal
						opportunity employer and does not discriminate against
						any applicant or employee based on race, color,
						religion, sex, national origin, disability, age, or
						military or veteran status in accordance with federal
						law. In addition,{' '}
						<strong>EMERGENCY ELECTRIC INC</strong>, complies with
						applicable state and local laws governing
						non-discrimination in employment in every jurisdiction
						in which it maintains facilities.{' '}
						<strong>EMERGENCY ELECTRIC INC</strong>, also provides
						reasonable accommodation to qualified individuals with
						disabilities in accordance with applicable laws.
					</p>
				</div>
				<Scrollchor
					to='#personalData'
					className='btn btn-danger btn-lg mr-2'>
					Continue
				</Scrollchor>
				<Scrollchor to='#page-top' className='btn btn-danger btn-lg'>
					<FontAwesomeIcon icon={faAngleDoubleUp} />
				</Scrollchor>
			</Container>
		</section>
	);
};

export default Introduction;

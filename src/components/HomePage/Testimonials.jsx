import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';

const Testimonials = () => {
	return (
		<section
			className='content-section bg-light text-center'
			id='testimonials'>
			<Container className='text-center'>
				<div className='content-section-heading'>
					<h3 className='mb-0'>Testimonials</h3>
					<h2 className='mb-5'>Hear from our customers!</h2>
				</div>
				<Row>
					<div className='col-md-6 mb-5 mb-lg-0'>
						<blockquote className='blockquote'>
							<p className='mb-0'>
								`They were very efficent, prompt and courteous.
								They even did a little bit extra that they
								really did not have to do. They were quick. I
								have used them twice now`
							</p>
							<footer className='blockquote-footer'>
								<cite>Arlene W.</cite>
							</footer>
						</blockquote>
					</div>
					<div className='col-md-6 mb-5 mb-lg-0'>
						<blockquote className='blockquote'>
							<p className='mb-0'>
								`They do very good electrical work. They are
								friendly, conscientious about their work, arrive
								on time, charge fair prices and make good
								recommendations about our electrial service. I
								liked their personal touch, and helpful,
								attentive interest. I have used them twice and
								would use them again`
							</p>
							<footer className='blockquote-footer'>
								<cite>John Robertson</cite>
							</footer>
						</blockquote>
					</div>
				</Row>
				<Button variant='danger' size='lg' href='#goals'>
					Our Goals
				</Button>
			</Container>
		</section>
	);
};

export default Testimonials;

import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Header.css';
class Header extends Component {
	render() {
		return (
			<section className='header-section d-flex'>
				<Container className='text-center my-auto'>
					<h1 className='mb-1 text-light'>Emergency Electric</h1>
					<h3 className='mb-5 text-light'>Lanesville, IN</h3>
					<Button variant='danger' size='lg' href='#about'>
						Find Out More
					</Button>
				</Container>
			</section>
		);
	}
}

export default Header;

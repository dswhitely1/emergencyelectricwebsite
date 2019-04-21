import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Scrollchor from 'react-scrollchor';
import './Header.css';
class Header extends Component {
	render() {
		return (
			<section className='header-section d-flex'>
				<Container className='text-center my-auto'>
					<h1 className='mb-1 text-light'>Emergency Electric</h1>
					<h3 className='mb-5 text-light'>Lanesville, IN</h3>
					<Scrollchor className='btn btn-danger btn-lg' to='#about'>
						Find Out More
					</Scrollchor>
				</Container>
			</section>
		);
	}
}

export default Header;

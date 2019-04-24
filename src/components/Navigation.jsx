import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { applyClick } from '../actions/creators/applicationActions';
import { Navbar, Button, Container, Nav } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';
const baseUrl = process.env.PUBLIC_URL;
class Navigation extends Component {
	handleClick = e => {
		if (this.props.route.route) {
			this.props.applyClick(false);
		} else {
			this.props.applyClick(true);
		}
	};
	render() {
		return (
			<Navbar
				bg='success'
				variant='dark'
				expand='lg'
				fixed='top'
				className='text-uppercase'>
				<Container className='justify-content-center'>
					<Navbar.Toggle
						aria-controls='basic-navbar-nav'
						className='navbar-toggler-right border-0'
					/>
					<Navbar.Collapse
						id='basic-navbar-nav'
						className='text-center justify-content-center'>
						<Nav.Link className='mx-2 text-light' href='#page-top'>
							Home
						</Nav.Link>
						<Nav.Link
							className='mx-2 text-light'
							href='#introduction'>
							About Us
						</Nav.Link>
						<Nav.Link className='mx-2 text-light' href='#services'>
							Services
						</Nav.Link>
						<Navbar.Brand className='shadow nav-link text-white  mr-0'>
							<strong>Emergency Electric INC</strong>
						</Navbar.Brand>
						<Nav.Link
							className='mx-2 text-light'
							href='#testimonials'>
							Testimonials
						</Nav.Link>
						<Nav.Link className='mx-2 text-light' href='#goals'>
							Goals
						</Nav.Link>
						<Nav.Link className='mx-2 text-light' href='#contact'>
							Contact Us
						</Nav.Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}

const mapStateToProps = state => {
	return { route: state.applicationRoute };
};

export default connect(mapStateToProps, { applyClick })(Navigation);

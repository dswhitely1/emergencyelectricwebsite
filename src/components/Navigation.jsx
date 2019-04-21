import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';
class Navigation extends Component {
	render() {
		return (
			<Navbar bg='dark' expand='lg' variant='dark' fixed='top'>
				<Scrollchor to='#' className='navbar-brand'>
					Emergency Electric
				</Scrollchor>

				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<NavDropdown title='Home' id='basic-nav-dropdown'>
							<Scrollchor to='#about' className='dropdown-item'>
								About
							</Scrollchor>
							<Scrollchor
								to='#services'
								className='dropdown-item'>
								Services
							</Scrollchor>
							<Scrollchor
								to='#testimonials'
								className='dropdown-item'>
								Testimonials
							</Scrollchor>
							<Scrollchor to='#goals' className='dropdown-item'>
								Goals
							</Scrollchor>
							<Scrollchor to='#contact' className='dropdown-item'>
								Contact
							</Scrollchor>
						</NavDropdown>
					</Nav>
					<Button variant='outline-success' className='mr-2'>
						Now Hiring
					</Button>
					<Button variant='outline-danger'>502-727-4923</Button>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Navigation;

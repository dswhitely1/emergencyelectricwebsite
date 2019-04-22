import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applyClick } from '../actions/creators/applicationActions';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';
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
					<Button
						variant={`outline-${this.props.route.btnColorVariant}`}
						className='mr-2'
						onClick={this.handleClick}>
						{`${this.props.route.btnText}`}
					</Button>
					<Button variant='outline-danger' href='tel:1-502-727-4923'>
						502-727-4923
					</Button>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

const mapStateToProps = state => {
	return { route: state.applicationRoute };
};

export default connect(mapStateToProps, { applyClick })(Navigation);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { applyClick } from '../actions/creators/applicationActions';
import { Navbar, Button } from 'react-bootstrap';
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
			<Navbar bg='transparent' expand='sm' fixed='top'>
				<Scrollchor to='#' className='navbar-brand mr-3'>
					Emergency Electric
				</Scrollchor>

				<LinkContainer to='/' activeClassName=''>
					<Button variant='outline-success mr-3 btn-sm'>Home</Button>
				</LinkContainer>
				<LinkContainer to='/apply' activeClassName=''>
					<Button variant='outline-success mr-auto btn-sm'>
						Apply Now
					</Button>
				</LinkContainer>

				<Button variant='info btn-sm' href='tel:1-502-727-4923'>
					502-727-4923
				</Button>
			</Navbar>
		);
	}
}

const mapStateToProps = state => {
	return { route: state.applicationRoute };
};

export default connect(mapStateToProps, { applyClick })(Navigation);

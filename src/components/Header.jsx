import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Scrollchor from 'react-scrollchor';
import './Header.css';
class Header extends Component {
	render() {
		return (
			<section className='header-section d-flex'>
				<Container className='text-center my-auto'>
					<h1 className='mb-1 text-light'>Emergency Electric</h1>
					<h3 className='mb-5 text-light'>
						24 Hour Service | Licensed and Insured | Residential and
						Commercial
					</h3>

					<Scrollchor
						className='btn btn-danger btn-lg'
						to='#introduction'>
						Find Out More
					</Scrollchor>
				</Container>
			</section>
		);
	}
}
const mapStateToProps = state => {
	return { route: state.applicationRoute };
};
export default connect(mapStateToProps)(Header);

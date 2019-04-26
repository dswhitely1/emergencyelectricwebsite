import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Scrollchor from 'react-scrollchor';
import './Header2.css';
class Header2 extends Component {
	render() {
		return (
			<section className='header-section2 d-flex'>
				<Container className='text-center my-auto'>
					<h1 className='mb-1 text-dark'>Emergency Electric</h1>
					<h3 className='mb-5 text-dark'>
						24 Hour Service | Licensed and Insured | Residential and Commercial
					</h3>

					<Scrollchor className='btn btn-danger btn-lg' to='#introduction'>
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
export default connect(mapStateToProps)(Header2);

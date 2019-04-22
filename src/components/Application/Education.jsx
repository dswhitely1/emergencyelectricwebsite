import React, { Component } from 'react';
import { connect } from 'react-redux';
import { personalDataSchema } from '../../js/constants';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
class Education extends Component {
	render() {
		return (
			<section className='content-section bg-light'>
				<Container>
					<div className='content-section-heading text-center'>
						<h3 className='mb-0'>Employment Application</h3>
						<h2 className='mb-5'>Education and References</h2>
					</div>
					<Formik validation={personalDataSchema}>
						<Form noValidate>
							<Form.Group as={Row} controlId='frmEducation'>
								test
							</Form.Group>
						</Form>
					</Formik>
				</Container>
			</section>
		);
	}
}

export default connect(null)(Education);

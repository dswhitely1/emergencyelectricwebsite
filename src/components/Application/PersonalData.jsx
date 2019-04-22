import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	personalDataValidation,
	valueApplicationPersData,
} from '../../actions/creators/applicationActions';
import { personalDataSchema } from '../../js/constants';
import { Formik } from 'formik';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import Scrollchor from 'react-scrollchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

class PersonalData extends Component {
	handleSubmit(e) {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}
		this.props.personalDataValidation(true);
		const values = {
			firstName      : this.props.data.firstName,
			lastName       : this.props.data.lastName,
			prefName       : this.props.data.prefName,
			address1       : this.props.data.address1,
			address2       : this.props.data.address2,
			city           : this.props.data.city,
			state          : this.props.data.state,
			zipCode        : this.props.data.zipCode,
			phoneNumber    : this.props.data.phoneNumber,
			altPhoneNumber : this.props.data.altPhoneNumber,
			email          : this.props.data.email,
		};
		const valid = async value => {
			const response = await personalDataSchema.isValid(value);
			return response;
		};

		console.log(valid(values));
		personalDataSchema.validate(values, { abortEarly: false }).catch(e => {
			console.table(e);
		});
	}

	handleChange = e => {
		const formUpdate = this.props.valueApplicationPersData;
		switch (e.target.id) {
			case 'formFirstName':
				formUpdate('firstName', e.target.value);
				break;
			case 'formLastName':
				formUpdate('lastName', e.target.value);
				break;
			case 'formPrefName':
				formUpdate('prefName', e.target.value);
				break;
			case 'formAddress1':
				formUpdate('address1', e.target.value);
				break;
			case 'formAddress2':
				formUpdate('address2', e.target.value);
				break;
			case 'formCity':
				formUpdate('city', e.target.value);
				break;
			case 'formState':
				formUpdate('state', e.target.value);
				break;
			case 'formZipCode':
				formUpdate('zipCode', e.target.value);
				break;
			case 'formPhoneNumber':
				formUpdate('phoneNumber', e.target.value);
				break;
			case 'formAltNumber':
				formUpdate('altPhoneNumber', e.target.value);
				break;
			case 'formEmail':
				formUpdate('email', e.target.value);
				break;
			default:
				return null;
		}
	};
	render() {
		const {
			validated,
			firstName,
			lastName,
			prefName,
			address1,
			address2,
			city,
			state,
			zipCode,
			phoneNumber,
			altPhoneNumber,
			email,
		} = this.props.data;
		return (
			<section
				className='content-section bg-danger text-white'
				id='personalData'>
				<Container>
					<div className='content-section-heading text-center'>
						<h3 className='mb-0'>Employment Application</h3>
						<h2 className='mb-5'>Personal Data</h2>
					</div>
					<Formik validationSchema={personalDataSchema}>
						<Form
							noValidate
							validated={validated}
							onSubmit={e => this.handleSubmit(e)}>
							<Form.Row>
								<Form.Group controlId='formFirstName' as={Col}>
									<Form.Label>First Name</Form.Label>
									<Form.Control
										required
										name='firstName'
										value={firstName}
										type='text'
										placeholder='First Name'
										onChange={this.handleChange}
									/>
								</Form.Group>
								<Form.Group controlId='formLastName' as={Col}>
									<Form.Label>Last Name</Form.Label>
									<Form.Control
										required
										name='lastName'
										value={lastName}
										onChange={this.handleChange}
										type='text'
										placeholder='Last Name'
									/>
								</Form.Group>
								<Form.Group controlId='formPrefName' as={Col}>
									<Form.Label>Preferred Name</Form.Label>
									<Form.Control
										name='prefName'
										value={prefName}
										onChange={this.handleChange}
										type='text'
									/>
								</Form.Group>
							</Form.Row>
							<Form.Group controlId='formAddress1'>
								<Form.Label>Address</Form.Label>
								<Form.Control
									required
									name='address1'
									value={address1}
									onChange={this.handleChange}
									placeholder='1234 Main St'
								/>
							</Form.Group>
							<Form.Group controlId='formAddress2'>
								<Form.Label>Address 2</Form.Label>
								<Form.Control
									name='address2'
									value={address2}
									onChange={this.handleChange}
									placeholder='Apartment, studio, or floor'
								/>
							</Form.Group>
							<Form.Row>
								<Form.Group controlId='formCity' as={Col}>
									<Form.Label>City</Form.Label>
									<Form.Control
										required
										name='city'
										value={city}
										onChange={this.handleChange}
										placeholder='City'
									/>
								</Form.Group>
								<Form.Group controlId='formState' as={Col}>
									<Form.Label>State</Form.Label>
									<Form.Control
										as='select'
										required
										name='state'
										value={state}
										onChange={this.handleChange}>
										<option>AL</option>
										<option>AK</option>
										<option>AZ</option>
										<option>AR</option>
										<option>CA</option>
										<option>CO</option>
										<option>CT</option>
										<option>DE</option>
										<option>FL</option>
										<option>GA</option>
										<option>HI</option>
										<option>ID</option>
										<option>IL</option>
										<option>IN</option>
										<option>IA</option>
										<option>KS</option>
										<option>KY</option>
										<option>LA</option>
										<option>ME</option>
										<option>MD</option>
										<option>MA</option>
										<option>MI</option>
										<option>MN</option>
										<option>MS</option>
										<option>MO</option>
										<option>MT</option>
										<option>NE</option>
										<option>NV</option>
										<option>NH</option>
										<option>NJ</option>
										<option>NM</option>
										<option>NY</option>
										<option>NC</option>
										<option>ND</option>
										<option>OH</option>
										<option>OK</option>
										<option>OR</option>
										<option>PA</option>
										<option>RI</option>
										<option>SC</option>
										<option>SD</option>
										<option>TN</option>
										<option>TX</option>
										<option>UT</option>
										<option>VT</option>
										<option>VA</option>
										<option>WA</option>
										<option>WV</option>
										<option>WI</option>
										<option>WY</option>
									</Form.Control>
								</Form.Group>
								<Form.Group controlId='formZipCode' as={Col}>
									<Form.Label>Zip Code</Form.Label>
									<Form.Control
										required
										name='zipCode'
										value={zipCode}
										onChange={this.handleChange}
										type='text'
										placeholder='Zip Code'
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group
									controlId='formPhoneNumber'
									as={Col}>
									<Form.Label>Phone Number</Form.Label>
									<Form.Control
										required
										name='phoneNumber'
										value={phoneNumber}
										onChange={this.handleChange}
										type='text'
									/>
								</Form.Group>
								<Form.Group controlId='formAltNumber' as={Col}>
									<Form.Label>Alt Number</Form.Label>
									<Form.Control
										name='altPhoneNumber'
										value={altPhoneNumber}
										onChange={this.handleChange}
										type='text'
									/>
								</Form.Group>
								<Form.Group controlId='formEmail' as={Col}>
									<Form.Label>Email</Form.Label>
									<Form.Control
										required
										name='email'
										value={email}
										onChange={this.handleChange}
										type='email'
										placeholder='someone@someone.com'
									/>
									<Form.Control.Feedback type='invalid'>
										Invalid Email Address
									</Form.Control.Feedback>
								</Form.Group>
							</Form.Row>
							<Scrollchor
								to='#personalData2'
								className='btn btn-outline-light btn-lg mr-2'>
								Continue
							</Scrollchor>

							<Button
								type='button'
								variant='outline-light'
								size='lg'
								onClick={this.handleClearForm}>
								Clear Form
							</Button>

							<Scrollchor
								to='#page-top'
								className='btn btn-outline-light btn-lg float-right'>
								<FontAwesomeIcon icon={faAngleDoubleUp} />
							</Scrollchor>
						</Form>
					</Formik>
				</Container>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return { data: state.appPersData };
};

export default connect(mapStateToProps, {
	personalDataValidation,
	valueApplicationPersData,
})(PersonalData);

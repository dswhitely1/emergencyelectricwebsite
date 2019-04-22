import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Scrollchor from 'react-scrollchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

class PersonalData extends Component {
	render() {
		return (
			<section
				className='content-section bg-danger text-white text-center'
				id='personalData'>
				<Container>
					<div className='content-section-heading'>
						<h3 className='mb-0'>Employment Application</h3>
						<h2 className='mb-5'>Personal Data</h2>
					</div>

					<Form className='text-left'>
						<Form.Row>
							<Form.Group controlId='formFirstName' as={Col}>
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type='text'
									placeholder='First Name'
								/>
							</Form.Group>
							<Form.Group controlId='formLastName' as={Col}>
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type='text'
									placeholder='Last Name'
								/>
							</Form.Group>
							<Form.Group controlId='formPrefName' as={Col}>
								<Form.Label>Preferred Name</Form.Label>
								<Form.Control type='text' />
							</Form.Group>
						</Form.Row>
						<Form.Group controlId='formAddress1'>
							<Form.Label>Address</Form.Label>
							<Form.Control placeholder='1234 Main St' />
						</Form.Group>
						<Form.Group controlId='formAddress2'>
							<Form.Label>Address 2</Form.Label>
							<Form.Control placeholder='Apartment, studio, or floor' />
						</Form.Group>
						<Form.Row>
							<Form.Group controlId='formCity' as={Col}>
								<Form.Label>City</Form.Label>
								<Form.Control placeholder='City' />
							</Form.Group>
							<Form.Group controlId='formState' as={Col}>
								<Form.Label>State</Form.Label>
								<Form.Control as='select' placeholder='IN'>
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
									type='number'
									placeholder='Zip Code'
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group controlId='formPhoneNumber' as={Col}>
								<Form.Label>Phone Number</Form.Label>
								<Form.Control type='number' />
							</Form.Group>
							<Form.Group controlId='formaltNumber' as={Col}>
								<Form.Label>Alt Number</Form.Label>
								<Form.Control type='number' />
							</Form.Group>
							<Form.Group controlId='formEmail' as={Col}>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type='email'
									placeholder='someone@someone.com'
								/>
							</Form.Group>
						</Form.Row>
						<Button
							type='submit'
							variant='outline-light'
							className='mr-2'
							size='lg'>
							Continue
						</Button>
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
				</Container>
			</section>
		);
	}
}

export default PersonalData;

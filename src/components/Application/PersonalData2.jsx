import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { personalDataSchema2 } from '../../js/constants';
import Scrollchor from 'react-scrollchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

class PersonalData2 extends Component {
	render() {
		return (
			<section className='content-section bg-light' id='personalData2'>
				<Container>
					<div className='content-section-heading text-center'>
						<h3 className='mb-0'>Employment Application</h3>
						<h2 className='mb-5'>Personal Data Continued</h2>
					</div>
					<Formik validation={personalDataSchema2}>
						{({
							handleSubmit,
							handleChange,
							handleBlur,
							values,
							touched,
							isValid,
							errors,
						}) => (
							<Form noValidate onSubmit={handleSubmit}>
								<Form.Group controlId='formTypeWork'>
									<Form.Label className='mr-5'>
										Are you interested in:
									</Form.Label>

									<Form.Check
										custom
										inline
										label='Full Time'
										type='checkbox'
										id='frmChkFullTime'
									/>
									<Form.Check
										custom
										inline
										label='Part Time'
										type='checkbox'
										id='frmChkPartTime'
									/>
									<Form.Check
										custom
										inline
										label='Temporary'
										type='checkbox'
										id='frmChkTemporary'
									/>
								</Form.Group>
								<Form.Group controlId='formSchedule'>
									<Form.Label className='mr-5'>
										What schedule would you prefer?
									</Form.Label>
									<Form.Check
										custom
										inline
										label='Weekdays'
										type='checkbox'
										id='frmChkWeekDays'
									/>
									<Form.Check
										custom
										inline
										label='Weekends'
										type='checkbox'
										id='frmChkWeekEnds'
									/>
									<Form.Check
										custom
										inline
										label='Evenings'
										type='checkbox'
										id='frmChEvenings'
									/>
									<Form.Check
										custom
										inline
										label='Nights'
										type='checkbox'
										id='frmChkNights'
									/>
								</Form.Group>
								<Form.Group as={Row} controlId='frmReferral'>
									<Form.Label column sm={3}>
										How did you hear about us?
									</Form.Label>
									<Col sm={9}>
										<Form.Control
											type='text'
											name='referral'
										/>
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId='frmPayAndDate'>
									<Form.Label column sm={2}>
										Desired Pay
									</Form.Label>
									<Col sm={4}>
										<Form.Control type='text' name='pay' />
									</Col>
									<Form.Label column sm={3}>
										When are you able to start work?
									</Form.Label>
									<Col sm={3}>
										<Form.Control type='date' name='date' />
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId='frmPosition'>
									<Form.Label column sm={4}>
										Position desired:
									</Form.Label>
									<Col sm={8}>
										<Form.Control
											type='text'
											name='position'
										/>
									</Col>
								</Form.Group>
								<Form.Group controlId='frmAuthorize'>
									<Form.Label className='mr-5'>
										Are you authroized to work in the United
										States?
									</Form.Label>

									<Form.Check
										custom
										inline
										label='Yes'
										type='radio'
										id='frmAuthYes'
									/>
									<Form.Check
										custom
										inline
										label='No'
										type='radio'
										id='frmAuthNo'
									/>
								</Form.Group>
								<Form.Group controlId='frmAge'>
									<Form.Label className='mr-5'>
										Are you under 18 years of age?
									</Form.Label>
									<Form.Check
										custom
										inline
										label='Yes'
										type='radio'
										id='frmAgeYes'
									/>
									<Form.Check
										custom
										inline
										label='No'
										type='radio'
										id='frmAgeNo'
									/>
								</Form.Group>
								<Form.Group controlId='frmAgeUnder18'>
									<Form.Label className='mr-5'>
										If yes, can you furnish a work permit?
									</Form.Label>
									<Form.Check
										custom
										inline
										label='Yes'
										type='radio'
										id='frmUnderAgeYes'
									/>
									<Form.Check
										custom
										inline
										label='No'
										type='radio'
										id='frmUnderAgeNo'
									/>
								</Form.Group>
								<p className='lead'>
									Federal law requres that employers hire only
									individuals who are authorized to be
									lawfully employed in the United States. In
									compliance with these laws,{' '}
									<strong>EMERGENCY ELECTRIC INC</strong>,
									will verify the status of every individual
									offered employment with the Company. In this
									connection, all offers of employment are
									subject to verification of the applicant's
									identiy and employment authorization, and it
									will be necessary for you to submit such
									documents as are required by law to verify
									your identification and employment
									authorization.
								</p>
								<Button
									type='button'
									variant='danger'
									className='mr-2'
									size='lg'>
									Continue
								</Button>
								<Button
									type='button'
									variant='danger'
									size='lg'
									onClick={this.handleClearForm}>
									Clear Form
								</Button>

								<Scrollchor
									to='#page-top'
									className='btn btn-danger btn-lg float-right'>
									<FontAwesomeIcon icon={faAngleDoubleUp} />
								</Scrollchor>
							</Form>
						)}
					</Formik>
				</Container>
			</section>
		);
	}
}

export default connect(null)(PersonalData2);

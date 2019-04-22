import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { personalDataSchema } from '../../js/constants';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Scrollchor from 'react-scrollchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

class WorkHistory extends Component {
	render() {
		return (
			<section
				className='content-section bg-danger text-light'
				id='contact'>
				<Container>
					<div className='content-section-heading text-center'>
						<h3 className='mb-0'>Employment Application</h3>
						<h2 className='mb-5'>Employment History</h2>
					</div>
					<div className='col-lg-10 mx-auto'>
						<p className='lead mb-5'>
							Please complete for all full-time or part-time
							employment beginning with most recent employer. You
							may include as part of your employment history any
							verified work performed on a volunteer basis. All
							applicants should start with their most recent job,
							include military assignments and voluntary
							employment. You must explain any gaps in your
							employment history.
						</p>
					</div>

					<Formik validation={personalDataSchema}>
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
								<Form.Group
									as={Row}
									controlId='frmEmployerName'>
									<Form.Label column sm={2}>
										Company Name
									</Form.Label>
									<Col sm={6}>
										<Form.Control
											type='text'
											name='companyName'
										/>
									</Col>
									<Form.Label column sm={1}>
										Telephone
									</Form.Label>
									<Col sm={3}>
										<Form.Control
											type='text'
											name='companyPhone'
										/>
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId='frmSupervisor'>
									<Form.Label column sm={2}>
										Name of Supervisor
									</Form.Label>
									<Col sm={6} className='mr-5'>
										<Form.Control
											type='text'
											name='superVisor'
										/>
									</Col>
									<Form.Label className='mr-5'>
										May we contact:
									</Form.Label>
									<Form.Check
										custom
										inline
										label='Yes'
										type='checkbox'
										id='frmContactYes'
									/>
									<Form.Check
										custom
										inline
										label='No'
										type='checkbox'
										id='frmContactNo'
									/>
								</Form.Group>
								<Form.Group
									as={Row}
									controlId='frmDates'
									className='mb-5'>
									<Form.Label column sm={1}>
										Start
									</Form.Label>
									<Col sm={2}>
										<Form.Control
											type='date'
											name='startDate'
										/>
									</Col>
									<Form.Label column sm={1}>
										End Date
									</Form.Label>
									<Col sm={2}>
										<Form.Control
											type='date'
											name='endDate'
										/>
									</Col>
									<Form.Label
										column
										sm={2}
										className='text-right'>
										Reason for leaving:
									</Form.Label>
									<Col sm={4}>
										<Form.Control
											type='text'
											name='reasonLeft'
										/>
									</Col>
								</Form.Group>
								<div className='border border-top-0 border-right-0 border-left-0 border-light mb-5' />
								<Form.Group
									as={Row}
									controlId='frmEmployerName'>
									<Form.Label column sm={2}>
										Company Name
									</Form.Label>
									<Col sm={6}>
										<Form.Control
											type='text'
											name='companyName'
										/>
									</Col>
									<Form.Label column sm={1}>
										Telephone
									</Form.Label>
									<Col sm={3}>
										<Form.Control
											type='text'
											name='companyPhone'
										/>
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId='frmSupervisor'>
									<Form.Label column sm={2}>
										Name of Supervisor
									</Form.Label>
									<Col sm={6} className='mr-5'>
										<Form.Control
											type='text'
											name='superVisor'
										/>
									</Col>
									<Form.Label className='mr-5'>
										May we contact:
									</Form.Label>
									<Form.Check
										custom
										inline
										label='Yes'
										type='checkbox'
										id='frmContactYes'
									/>
									<Form.Check
										custom
										inline
										label='No'
										type='checkbox'
										id='frmContactNo'
									/>
								</Form.Group>
								<Form.Group
									as={Row}
									controlId='frmDates'
									className='mb-5'>
									<Form.Label column sm={1}>
										Start
									</Form.Label>
									<Col sm={2}>
										<Form.Control
											type='date'
											name='startDate'
										/>
									</Col>
									<Form.Label column sm={1}>
										End Date
									</Form.Label>
									<Col sm={2}>
										<Form.Control
											type='date'
											name='endDate'
										/>
									</Col>
									<Form.Label
										column
										sm={2}
										className='text-right'>
										Reason for leaving:
									</Form.Label>
									<Col sm={4}>
										<Form.Control
											type='text'
											name='reasonLeft'
										/>
									</Col>
								</Form.Group>
								<div className='border border-top-0 border-right-0 border-left-0 border-light mb-5' />
								<Form.Group
									as={Row}
									controlId='frmEmployerName'>
									<Form.Label column sm={2}>
										Company Name
									</Form.Label>
									<Col sm={6}>
										<Form.Control
											type='text'
											name='companyName'
										/>
									</Col>
									<Form.Label column sm={1}>
										Telephone
									</Form.Label>
									<Col sm={3}>
										<Form.Control
											type='text'
											name='companyPhone'
										/>
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId='frmSupervisor'>
									<Form.Label column sm={2}>
										Name of Supervisor
									</Form.Label>
									<Col sm={6} className='mr-5'>
										<Form.Control
											type='text'
											name='superVisor'
										/>
									</Col>
									<Form.Label className='mr-5'>
										May we contact:
									</Form.Label>
									<Form.Check
										custom
										inline
										label='Yes'
										type='checkbox'
										id='frmContactYes'
									/>
									<Form.Check
										custom
										inline
										label='No'
										type='checkbox'
										id='frmContactNo'
									/>
								</Form.Group>
								<Form.Group
									as={Row}
									controlId='frmDates'
									className='mb-5'>
									<Form.Label column sm={1}>
										Start
									</Form.Label>
									<Col sm={2}>
										<Form.Control
											type='date'
											name='startDate'
										/>
									</Col>
									<Form.Label column sm={1}>
										End Date
									</Form.Label>
									<Col sm={2}>
										<Form.Control
											type='date'
											name='endDate'
										/>
									</Col>
									<Form.Label
										column
										sm={2}
										className='text-right'>
										Reason for leaving:
									</Form.Label>
									<Col sm={4}>
										<Form.Control
											type='text'
											name='reasonLeft'
										/>
									</Col>
								</Form.Group>
								<div className='border border-top-0 border-right-0 border-left-0 border-light mb-5' />
								<Form.Group
									as={Row}
									controlId='frmEmployerName'>
									<Form.Label column sm={2}>
										Company Name
									</Form.Label>
									<Col sm={6}>
										<Form.Control
											type='text'
											name='companyName'
										/>
									</Col>
									<Form.Label column sm={1}>
										Telephone
									</Form.Label>
									<Col sm={3}>
										<Form.Control
											type='text'
											name='companyPhone'
										/>
									</Col>
								</Form.Group>
								<Form.Group as={Row} controlId='frmSupervisor'>
									<Form.Label column sm={2}>
										Name of Supervisor
									</Form.Label>
									<Col sm={6} className='mr-5'>
										<Form.Control
											type='text'
											name='superVisor'
										/>
									</Col>
									<Form.Label className='mr-5'>
										May we contact:
									</Form.Label>
									<Form.Check
										custom
										inline
										label='Yes'
										type='checkbox'
										id='frmContactYes'
									/>
									<Form.Check
										custom
										inline
										label='No'
										type='checkbox'
										id='frmContactNo'
									/>
								</Form.Group>
								<Form.Group
									as={Row}
									controlId='frmDates'
									className='mb-5'>
									<Form.Label column sm={1}>
										Start
									</Form.Label>
									<Col sm={2}>
										<Form.Control
											type='date'
											name='startDate'
										/>
									</Col>
									<Form.Label column sm={1}>
										End Date
									</Form.Label>
									<Col sm={2}>
										<Form.Control
											type='date'
											name='endDate'
										/>
									</Col>
									<Form.Label
										column
										sm={2}
										className='text-right'>
										Reason for leaving:
									</Form.Label>
									<Col sm={4}>
										<Form.Control
											type='text'
											name='reasonLeft'
										/>
									</Col>
								</Form.Group>
								<div className='border border-top-0 border-right-0 border-left-0 border-light mb-2' />
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
						)}
					</Formik>
				</Container>
			</section>
		);
	}
}

export default connect(null)(WorkHistory);

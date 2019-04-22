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
import {
	valueContactFormChange,
	resetContactForm,
	formValidation,
	sendMessage,
} from '../../actions/creators/formActions';
class ContactForm extends Component {
	handleSubmit(e) {
		const form = e.currentTarget;
		console.log(form.checkValidity());
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}
		this.props.formValidation(true);
		const values = {
			firstName : this.props.contactForm.firstName,
			lastName  : this.props.contactForm.lastName,
			email     : this.props.contactForm.email,
			message   : this.props.contactForm.message,
		};
		if (form.checkValidity()) {
			this.props.sendMessage(values);
			this.props.resetContactForm();
		}
	}
	handleClearForm = () => {
		this.props.resetContactForm();
	};
	handleFirstNameChange = e => {
		this.props.valueContactFormChange('firstName', e.target.value);
	};

	handleLastNameChange = e => {
		this.props.valueContactFormChange('lastName', e.target.value);
	};

	handleEmailChange = e => {
		this.props.valueContactFormChange('email', e.target.value);
	};

	handleMessageChange = e => {
		this.props.valueContactFormChange('message', e.target.value);
	};
	render() {
		const {
			validated,
			firstName,
			lastName,
			email,
			message,
		} = this.props.contactForm;

		return (
			<section className='content-section bg-light' id='contact'>
				<Container>
					<div className='content-section-heading text-center'>
						<h3 className='mb-0'>Contact Us</h3>
						<h2 className='mb-5'>Send Us a Message</h2>
					</div>
					<Form
						noValidate
						validated={validated}
						onSubmit={e => this.handleSubmit(e)}>
						<Form.Group controlId='formContact'>
							<Row className='mb-2'>
								<Col>
									<Form.Label>First Name</Form.Label>
									<Form.Control
										required
										value={firstName}
										type='text'
										placeholder='First name'
										onChange={this.handleFirstNameChange}
									/>
									<Form.Control.Feedback type='invalid'>
										Required
									</Form.Control.Feedback>
								</Col>
								<Col>
									<Form.Label>Last Name</Form.Label>
									<Form.Control
										required
										value={lastName}
										type='text'
										placeholder='Last Name'
										onChange={this.handleLastNameChange}
									/>
									<Form.Control.Feedback type='invalid'>
										Required
									</Form.Control.Feedback>
								</Col>
							</Row>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								required
								value={email}
								type='email'
								placeholder='Email address'
								onChange={this.handleEmailChange}
								className='mb-2'
							/>
							<Form.Control.Feedback type='invalid'>
								Please provide a valid email address
							</Form.Control.Feedback>
							<Form.Control.Feedback>
								Looks good!
							</Form.Control.Feedback>
							<Form.Label>Message</Form.Label>
							<Form.Control
								as='textarea'
								rows={4}
								placeholder='Enter Message Here'
								required
								value={message}
								onChange={this.handleMessageChange}
							/>
							<Form.Control.Feedback type='invalid'>
								Required
							</Form.Control.Feedback>
							<Form.Control.Feedback>
								Looks good!
							</Form.Control.Feedback>
						</Form.Group>
						<Button
							type='submit'
							variant='danger'
							className='mr-2'
							size='lg'>
							Send Message
						</Button>
						<Button
							type='button'
							variant='outline-danger'
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
				</Container>
			</section>
		);
	}
}
const mapStateToProps = state => {
	return {
		contactForm   : state.contactForm,
		messageToggle : state.messageDisplay,
	};
};
export default connect(mapStateToProps, {
	formValidation,
	resetContactForm,
	valueContactFormChange,
	sendMessage,
})(ContactForm);

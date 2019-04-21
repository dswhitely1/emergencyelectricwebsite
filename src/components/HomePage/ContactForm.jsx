import React, { Component } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import api from '../../api';
class ContactForm extends Component {
	constructor() {
		super();
		this.state = {
			validated : false,
			firstName : '',
			lastName  : '',
			email     : '',
			message   : '',
		};
	}

	handleSubmit(e) {
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}
		this.setState({ validated: true });
		e.preventDefault();
		e.stopPropagation();

		const values = {
			firstName : this.state.firstName,
			lastName  : this.state.lastName,
			email     : this.state.email,
			message   : this.state.message,
		};
		api.post('/send-email', values).then(res => {
			console.log(res);
			console.log(res.data);
		});
	}
	handleClearForm = () => {
		this.setState({
			firstName : '',
			lastName  : '',
			email     : '',
			message   : '',
		});
	};
	handleFirstNameChange = e => {
		this.setState({ firstName: e.target.value });
	};

	handleLastNameChange = e => {
		this.setState({ lastName: e.target.value });
	};

	handleEmailChange = e => {
		this.setState({ email: e.target.value });
	};

	handleMessageChange = e => {
		this.setState({ message: e.target.value });
	};
	render() {
		const { validated } = this.state;
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
										value={this.state.firstName}
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
										value={this.state.lastName}
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
								value={this.state.email}
								type='email'
								placeholder='email address'
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
								value={this.state.message}
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
					</Form>
				</Container>
			</section>
		);
	}
}

export default ContactForm;
